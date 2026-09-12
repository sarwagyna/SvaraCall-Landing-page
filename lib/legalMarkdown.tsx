import { createElement, Fragment, type ReactNode } from "react";
import Link from "next/link";

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern =
    /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(
        <strong key={`${keyPrefix}-b-${i}`}>{token.slice(2, -2)}</strong>,
      );
    } else if (token.startsWith("`")) {
      nodes.push(
        <code
          key={`${keyPrefix}-c-${i}`}
          className="rounded bg-surface-raised px-1 py-0.5 text-[0.9em]"
        >
          {token.slice(1, -1)}
        </code>,
      );
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const href = link[2];
        const label = link[1];
        const className = "text-primary underline-offset-2 hover:underline";
        if (href.startsWith("/")) {
          nodes.push(
            <Link key={`${keyPrefix}-a-${i}`} href={href} className={className}>
              {label}
            </Link>,
          );
        } else {
          nodes.push(
            <a
              key={`${keyPrefix}-a-${i}`}
              href={href}
              className={className}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>,
          );
        }
      }
    }
    last = match.index + token.length;
    i += 1;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  return nodes;
}

function isTableSeparator(line: string) {
  return /^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/.test(line);
}

function splitRow(line: string) {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((cell) => cell.trim());
}

function parseTable(lines: string[], start: number) {
  const header = splitRow(lines[start]);
  let i = start + 1;
  if (i < lines.length && isTableSeparator(lines[i])) i += 1;
  const rows: string[][] = [];
  while (i < lines.length && lines[i].includes("|") && !isTableSeparator(lines[i])) {
    if (!lines[i].trim()) break;
    if (lines[i].startsWith("#")) break;
    rows.push(splitRow(lines[i]));
    i += 1;
  }
  return { header, rows, next: i };
}

export function renderLegalMarkdown(markdown: string): ReactNode {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i += 1;
      continue;
    }

    if (line.trim() === "---") {
      blocks.push(<hr key={key++} className="my-8 border-line" />);
      i += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      blocks.push(
        <h1 key={key++} className="display text-[2rem] leading-tight md:text-[2.4rem]">
          {renderInline(line.slice(2), `h1-${key}`)}
        </h1>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(
        <h2
          key={key++}
          className="mt-12 text-xl font-semibold tracking-tight text-ink md:text-2xl"
        >
          {renderInline(line.slice(3), `h2-${key}`)}
        </h2>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={key++} className="mt-8 text-lg font-semibold text-ink">
          {renderInline(line.slice(4), `h3-${key}`)}
        </h3>,
      );
      i += 1;
      continue;
    }

    if (line.includes("|") && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      const table = parseTable(lines, i);
      blocks.push(
        <div key={key++} className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line-strong">
                {table.header.map((cell, ci) => (
                  <th
                    key={ci}
                    className="px-3 py-2 font-semibold text-ink"
                  >
                    {renderInline(cell, `th-${key}-${ci}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-line align-top">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-body">
                      {renderInline(cell, `td-${key}-${ri}-${ci}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      i = table.next;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i += 1;
      }
      blocks.push(
        <ul key={key++} className="mt-4 list-disc space-y-2 pl-5 text-body">
          {items.map((item, ii) => (
            <li key={ii}>{renderInline(item, `li-${key}-${ii}`)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    const paragraph: string[] = [line];
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() &&
      lines[i].trim() !== "---" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("- ") &&
      !(lines[i].includes("|") && i + 1 < lines.length && isTableSeparator(lines[i + 1]))
    ) {
      paragraph.push(lines[i]);
      i += 1;
    }

    blocks.push(
      <p key={key++} className="mt-4 text-[1.05rem] leading-relaxed text-body">
        {paragraph.map((row, ri) => (
          <Fragment key={ri}>
            {ri > 0 ? createElement("br") : null}
            {renderInline(row, `p-${key}-${ri}`)}
          </Fragment>
        ))}
      </p>,
    );
  }

  return blocks;
}

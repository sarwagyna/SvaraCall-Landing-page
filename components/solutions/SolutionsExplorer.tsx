"use client";

import { useState, useTransition } from "react";
import {
  bottleneckPrompts,
  matchSolution,
  solutionFilters,
  type SolutionFilter,
} from "@/lib/solutions";
import { useSolutionsChat } from "@/components/solutions/SolutionsChatContext";

type SolutionsExplorerProps = {
  onFilterChange?: (filter: SolutionFilter) => void;
  filter?: SolutionFilter;
  /** When false, filter pills are rendered elsewhere (catalog). */
  showFilters?: boolean;
};

export default function SolutionsExplorer({
  onFilterChange,
  filter = "all",
  showFilters = true,
}: SolutionsExplorerProps) {
  const [query, setQuery] = useState("");
  const [matchedId, setMatchedId] = useState<string | null>(null);
  const [, startTransition] = useTransition();
  const { openWithPrompt } = useSolutionsChat();

  const generate = (value = query) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    const match = matchSolution(trimmed);
    if (match) {
      setMatchedId(match.id);
      startTransition(() => {
        onFilterChange?.(match.filter);
      });
    }

    openWithPrompt(
      trimmed.startsWith("I want") || trimmed.startsWith("I need")
        ? trimmed
        : `I want to solve: ${trimmed}`,
    );
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <form
        className="rounded-[20px] bg-canvas-soft p-1.5 ring-1 ring-line-strong sm:rounded-[24px] sm:p-2"
        onSubmit={(e) => {
          e.preventDefault();
          generate();
        }}
      >
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2">
          <label htmlFor="bottleneck-input" className="sr-only">
            Tell us your calling bottleneck
          </label>
          <div className="flex min-w-0 flex-1 items-center gap-2 px-3 sm:px-4">
            <span className="hidden shrink-0 text-sm font-semibold text-mute sm:inline">
              I want to…
            </span>
            <input
              id="bottleneck-input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Build outbound follow-up for cold leads…"
              className="h-11 w-full min-w-0 border-0 bg-transparent text-[15px] text-ink outline-none ring-0 placeholder:text-mute focus-visible:outline-none sm:h-12 sm:text-base"
            />
          </div>
          <button
            type="submit"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-pill bg-primary px-5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active sm:h-12 sm:px-7"
          >
            SvaraCall it
          </button>
        </div>
      </form>

      {matchedId ? (
        <p className="mt-2.5 text-center text-sm text-ink-deep" role="status">
          Matched a workflow —{" "}
          <a
            href={`#solution-${matchedId}`}
            className="font-semibold underline-offset-2 hover:underline"
          >
            jump to card
          </a>
        </p>
      ) : null}

      <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2">
        {bottleneckPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => {
              setQuery(prompt);
              generate(prompt);
            }}
            className="rounded-pill bg-white/10 px-3 py-1.5 text-xs font-medium text-white/75 transition-colors hover:bg-primary-soft hover:text-primary sm:text-[13px]"
          >
            {prompt}
          </button>
        ))}
      </div>

      <nav
        aria-label="On this page"
        className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm"
      >
        {[
          { href: "#solutions-catalog", label: "All features & capabilities" },
          { href: "#solutions-verticals", label: "Use cases by vertical" },
          { href: "#solutions-playbook", label: "Case studies & plays" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-semibold text-white/65 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {showFilters ? (
        <div
          className="mt-5 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Filter solutions by bottleneck type"
        >
          {solutionFilters.map((item) => {
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onFilterChange?.(item.id)}
                className={`rounded-pill px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-primary text-on-primary"
                    : "bg-white/5 text-white/65 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

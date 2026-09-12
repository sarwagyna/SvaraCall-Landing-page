import { readFileSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seoMeta";
import { breadcrumbList, jsonLdGraph } from "@/lib/schema";
import {
  getLegalDoc,
  publishedLegalDocs,
  type LegalSlug,
} from "@/lib/legalDocs";
import { renderLegalMarkdown } from "@/lib/legalMarkdown";

export function legalPageMetadata(slug: LegalSlug) {
  const doc = getLegalDoc(slug);
  if (!doc) throw new Error(`Unknown legal page: ${slug}`);
  return pageMetadata({
    title: `${doc.title} — SvaraCall AI`,
    description: doc.description,
    path: `/${slug}`,
  });
}

function loadMarkdown(file: string) {
  return readFileSync(join(process.cwd(), "legal", file), "utf8");
}

export default function LegalDocumentPage({ slug }: { slug: LegalSlug }) {
  const doc = getLegalDoc(slug);
  if (!doc?.published) return null;

  const markdown = loadMarkdown(doc.file);
  const trail = [{ name: doc.shortTitle, path: `/${slug}` }];
  const graph = jsonLdGraph([breadcrumbList(trail)]);

  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main className="bg-canvas">
        <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
          <nav aria-label="Legal documents" className="mb-10 flex flex-wrap gap-x-4 gap-y-2">
            {publishedLegalDocs.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className={
                  item.slug === slug
                    ? "text-sm font-semibold text-ink"
                    : "text-sm text-mute transition-colors hover:text-ink"
                }
                aria-current={item.slug === slug ? "page" : undefined}
              >
                {item.shortTitle}
              </Link>
            ))}
          </nav>
          <div className="legal-doc">{renderLegalMarkdown(markdown)}</div>
        </article>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
}

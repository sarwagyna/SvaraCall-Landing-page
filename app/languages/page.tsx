import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/content";
import { languagePages } from "@/lib/languagePages";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Languages — AI Voice Agents Across India",
  description:
    "SvaraCall AI voice agents in Telugu, Hindi, and English today — with Tamil, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, and Hinglish on the roadmap.",
  alternates: { canonical: "/languages" },
};

const trail = [{ name: "Languages", path: "/languages" }];

export default function LanguagesIndexPage() {
  return (
    <>
      <Breadcrumbs trail={trail} />
      <main>
        <section className="bg-canvas-soft">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h1 className="display display-h2 max-w-3xl">
              Voice agents in the languages India actually speaks
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-body">
              Start with Telugu, Hindi, and English — then expand into regional
              languages as SvaraCall grows. Each language page shows use cases,
              sample conversations, and how code-switching works on the phone.
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {languagePages.map((page, i) => (
                <Reveal key={page.slug} as="li" delayMs={(i % 3) * 70}>
                  <Link
                    href={`/languages/${page.slug}`}
                    className="group flex h-full flex-col rounded-card bg-canvas p-7 transition-colors hover:bg-primary-pale"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-2xl font-semibold text-primary">
                        {page.nativeName}
                      </p>
                      <span
                        className={`rounded-pill px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                          page.status === "live"
                            ? "bg-primary text-on-primary"
                            : "bg-primary-soft text-primary"
                        }`}
                      >
                        {page.status === "live" ? "Live" : "Roadmap"}
                      </span>
                    </div>
                    <h2 className="mt-3 text-lg font-bold text-ink">
                      {page.name}
                    </h2>
                    <p className="mt-2 flex-1 text-body">{page.headline}</p>
                    <span className="mt-4 text-sm font-semibold text-ink-deep">
                      Explore {page.name} →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
        <CtaBand />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbList(trail)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "SvaraCall AI languages",
            itemListElement: languagePages.map((page, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: page.name,
              url: `${site.url}/languages/${page.slug}`,
            })),
          }),
        }}
      />
    </>
  );
}

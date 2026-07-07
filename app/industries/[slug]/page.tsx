import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { site, getIndustryPage, industryPages } from "@/lib/content";
import { breadcrumbList } from "@/lib/schema";
import { bookPilotHref } from "@/lib/nav";

type PageProps = { params: Promise<{ slug: string }> };

// The industry list is fixed, so prerender every page at build time and return
// 404 for anything else. This keeps the route fully static (no lambda needed).
export const dynamicParams = false;

export function generateStaticParams() {
  return industryPages.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getIndustryPage(slug);
  if (!data) return {};

  const url = `${site.url}/industries/${slug}`;
  const description = `${data.metaDescription} Premium quality at a fraction of a calling team's cost.`;
  return {
    title: data.metaTitle,
    description,
    alternates: { canonical: `/industries/${slug}` },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: site.name,
      title: data.metaTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description,
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getIndustryPage(slug);
  if (!data) notFound();

  const trail = [
    { name: "Industries", path: "/industries" },
    { name: data.name, path: `/industries/${slug}` },
  ];
  const breadcrumb = breadcrumbList(trail);

  return (
    <>
      <Breadcrumbs trail={trail} />
      <main>
        {/* Hero */}
        <section id="top" className="bg-canvas-soft">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
            <div>
              <p className="eyebrow">{data.eyebrow}</p>
              <h1 className="display display-hero mt-4">
                {data.heroTitle}
                <br />
                <span className="text-ink-deep">{data.heroAccent}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-body">{data.heroSubcopy}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={bookPilotHref}
                  className="inline-flex h-12 items-center rounded-pill bg-primary px-7 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
                >
                  Book a pilot
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex h-12 items-center rounded-pill border border-ink px-7 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
                >
                  See how it works
                </Link>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {[
                  "A fraction of a calling team's cost",
                  "Outcome-driven",
                  "Telugu · Hindi · English",
                ].map((chip) => (
                  <li
                    key={chip}
                    className="rounded-pill bg-canvas px-4 py-2 text-sm font-semibold text-ink shadow-sm"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pl-4">
              <div className="rounded-card bg-canvas p-7 shadow-sm">
                <p className="eyebrow">{data.heroMetric.label}</p>
                <p className="display mt-3 text-5xl text-ink-deep md:text-6xl">
                  {data.heroMetric.value}
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-4">
                  {data.heroTiles.map((tile) => (
                    <div
                      key={tile.label}
                      className="rounded-input bg-canvas-soft p-4"
                    >
                      <dt className="sr-only">{tile.label}</dt>
                      <dd>
                        <span className="text-2xl font-[900] text-ink">
                          {tile.value}
                        </span>
                        <p className="mt-1 text-xs font-semibold text-body">
                          {tile.label}
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* The standard / big stat */}
        <section className="bg-canvas">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="display display-h2 max-w-xl">
                {data.standardTitle}{" "}
                <span className="text-ink-deep">{data.standardAccent}</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-body">
                {data.standardBody}
              </p>
            </div>

            <Reveal className="rounded-card bg-canvas-soft p-8 md:p-10">
              <span className="display text-6xl text-ink-deep md:text-7xl">
                {data.bigStat.value}
              </span>
              <p className="mt-2 text-lg font-semibold text-ink">
                {data.bigStat.label}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {data.bigStat.points.map((point) => (
                  <li key={point} className="flex gap-3 text-body">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-pill bg-primary"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Workflows */}
        <section className="bg-canvas-soft">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <p className="eyebrow">Workflows</p>
            <h2 className="display display-h2 mt-3 max-w-3xl">
              {data.name} voice workflows
            </h2>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.workflows.map((card, i) => (
                <Reveal
                  key={card.title}
                  as="li"
                  delayMs={(i % 3) * 70}
                  className="rounded-card bg-canvas p-7"
                >
                  <h3 className="text-lg font-bold text-ink">{card.title}</h3>
                  <p className="mt-2 text-body">{card.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Results */}
        <section className="bg-canvas">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow">Outcomes</p>
                <h2 className="display display-h2 mt-3 max-w-xl">
                  {data.results.title}{" "}
                  <span className="text-ink-deep">{data.results.accent}</span>
                </h2>
                <p className="mt-5 max-w-xl text-lg text-body">
                  {data.results.body}
                </p>
                <blockquote className="mt-8 border-l-2 border-primary pl-5">
                  <p className="text-lg text-ink">
                    &ldquo;{data.results.quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-sm font-semibold text-body">
                    — {data.results.author}
                  </footer>
                </blockquote>
              </div>

              <dl className="grid gap-5 sm:grid-cols-2">
                {data.results.stats.map((stat, i) => (
                  <Reveal
                    key={`${stat.label}-${i}`}
                    delayMs={(i % 2) * 70}
                    className="rounded-card bg-canvas-soft p-7"
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="display text-4xl text-ink-deep md:text-5xl">
                        {stat.value}
                      </span>
                      <p className="mt-3 text-sm text-body">{stat.label}</p>
                    </dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-canvas">
          <div className="mx-auto max-w-6xl px-5 pb-16 md:pb-24">
            <div className="rounded-card bg-ink px-6 py-14 text-center md:px-12">
              <h2 className="display display-h2 text-white">
                {data.ctaTitle}{" "}
                <span className="text-primary">{data.ctaAccent}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                {data.ctaSubcopy}
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm font-semibold text-primary">
                Premium, human-grade calling at a fraction of a calling team&apos;s
                cost — you pay for outcomes, not headcount.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href={bookPilotHref}
                  className="inline-flex h-12 items-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
                >
                  Book a pilot
                </Link>
                <Link
                  href="/industries"
                  className="inline-flex h-12 items-center rounded-pill border border-white/30 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  All industries
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

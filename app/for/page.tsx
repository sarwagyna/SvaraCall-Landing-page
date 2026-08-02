import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import SoftAuroraLazy from "@/components/SoftAuroraLazy";
import { site } from "@/lib/content";
import { nichePages } from "@/lib/nichePages";
import { pageMetadata } from "@/lib/seoMeta";
import { bookPilotHref } from "@/lib/nav";
import { breadcrumbList, collectionPageSchema, jsonLdGraph } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "AI Voice Agents by Business Type | SvaraCall",
  description:
    "Find SvaraCall AI voice agents for your niche — dentists, hotels, banks, schools, logistics, NGOs, and 30+ more business types across India.",
  path: "/for",
});

const trail = [{ name: "For your business", path: "/for" }];

const graph = jsonLdGraph([
  breadcrumbList(trail),
  collectionPageSchema({
    name: "SvaraCall AI by Business Type",
    description:
      "Find SvaraCall AI voice agents for your niche — dentists, hotels, banks, schools, logistics, NGOs, and 30+ more business types across India.",
    url: `${site.url}/for`,
    items: nichePages.map((page) => ({
      name: page.name,
      url: `${site.url}/for/${page.slug}`,
    })),
    options: { graphNode: true },
  }),
]);

export default function ForHubPage() {
  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <section className="relative overflow-hidden bg-[#0b1110]">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <SoftAuroraLazy
              speed={0.45}
              scale={1.4}
              brightness={0.65}
              color1="#163300"
              color2="#9fe870"
              noiseFrequency={2.1}
              bandHeight={0.45}
              bandSpread={0.95}
              enableMouseInteraction={false}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1110]/40 via-[#0b1110]/7 to-canvas"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 md:py-20">
            <p className="eyebrow text-primary">By business type</p>
            <h1 className="display display-hero mt-4 max-w-4xl text-white">
              AI voice agents built for how you actually operate
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70">
              Niche guides with workflows, scripts, and compliance notes —
              from clinics and hotels to banks, logistics, and campaigns.
            </p>
            <Link
              href={bookPilotHref}
              className="mt-8 inline-flex h-12 items-center rounded-pill bg-primary px-7 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
            >
              Book a pilot
            </Link>
          </div>
        </section>

        <section className="bg-canvas">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {nichePages.map((page, i) => (
                <Reveal
                  key={page.slug}
                  as="li"
                  delayMs={(i % 3) * 40}
                  className="rounded-card bg-canvas-soft p-6"
                >
                  <h2 className="text-lg font-bold text-ink">
                    <Link
                      href={`/for/${page.slug}`}
                      className="hover:underline"
                    >
                      {page.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-body line-clamp-3">
                    {page.subcopy}
                  </p>
                  <Link
                    href={`/for/${page.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-ink-deep hover:underline"
                  >
                    View niche guide →
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
          __html: JSON.stringify(graph),
        }}
      />
    </>
  );
}

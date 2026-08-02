import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import SoftAuroraLazy from "@/components/SoftAuroraLazy";
import { site } from "@/lib/content";
import { featurePages } from "@/lib/featurePages";
import { pageMetadata } from "@/lib/seoMeta";
import { bookPilotHref } from "@/lib/nav";
import { breadcrumbList, collectionPageSchema, jsonLdGraph } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Features — AI Voice Agent Platform Capabilities",
  description:
    "SvaraCall AI features: voice cloning, multilingual agents, live transfer, CRM sync, campaign management, API, webhooks, DNC controls, and more.",
  path: "/features",
});

const trail = [{ name: "Features", path: "/features" }];

const graph = jsonLdGraph([
  breadcrumbList(trail),
  collectionPageSchema({
    name: "SvaraCall AI Features",
    description:
      "SvaraCall AI features: voice cloning, multilingual agents, live transfer, CRM sync, campaign management, API, webhooks, DNC controls, and more.",
    url: `${site.url}/features`,
    items: featurePages.map((page) => ({
      name: page.name,
      url: `${site.url}/features/${page.slug}`,
    })),
    options: { graphNode: true },
  }),
]);

export default function FeaturesHubPage() {
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
            <p className="eyebrow text-primary">Platform</p>
            <h1 className="display display-hero mt-4 max-w-4xl text-white">
              Features that make voice agents shippable
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70">
              Everything from multilingual conversation to CRM writeback,
              compliance controls, and developer APIs — built for Indian outbound
              and inbound ops.
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
              {featurePages.map((page, i) => (
                <Reveal
                  key={page.slug}
                  as="li"
                  delayMs={(i % 3) * 50}
                  className="rounded-card bg-canvas-soft p-6"
                >
                  <h2 className="text-lg font-bold text-ink">
                    <Link
                      href={`/features/${page.slug}`}
                      className="hover:text-ink-deep hover:underline"
                    >
                      {page.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-body line-clamp-3">
                    {page.subcopy}
                  </p>
                  <Link
                    href={`/features/${page.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-ink-deep hover:underline"
                  >
                    Explore feature →
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

import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site, canonicalSentence } from "@/lib/content";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us — The Team Behind SvaraCall AI",
  description:
    "SvaraCall AI is built by Sarwagyna Private Limited, an India-first AI and software company. Learn about our mission to automate outbound calling for Indian businesses.",
  alternates: { canonical: "/about" },
};

const trail = [{ name: "About Us", path: "/about" }];

const values = [
  {
    title: "India-first, world-class",
    body: "We build from India, for the world — voice AI that understands how India actually calls, in Telugu, Hindi, and English.",
  },
  {
    title: "Compliance by design",
    body: "TRAI and DLT-registered, consent-first, and DPDP-aligned. Trust is not a feature we bolt on later; it is where we start.",
  },
  {
    title: "Ship, learn, iterate",
    body: "A small team doing big things. We move fast, measure real outcomes, and improve every call our agents make.",
  },
  {
    title: "Radical transparency",
    body: "Every call is logged, recorded, and transcribed to one dashboard — so you always know exactly what was said and done.",
  },
];

const products = [
  {
    name: "SvaraCall AI",
    body: "AI outbound calling agent for lead follow-ups, reminders, and confirmations.",
    href: "/",
    external: false,
  },
  {
    name: "SvaraRx",
    body: "Voice prescriptions for doctors — faster, structured clinical documentation.",
    href: site.svaraRxUrl,
    external: true,
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <section className="bg-canvas">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
            <p className="eyebrow">About us</p>
            <h1 className="display display-hero mt-4">
              Voice AI, built for how India calls.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-body">
              {canonicalSentence} We build AI voice agents that handle routine
              outbound calling at a scale and consistency a manual team can&apos;t
              match — so businesses can reach every lead, confirm every
              appointment, and never let a follow-up slip.
            </p>
          </div>
        </section>

        <section className="bg-canvas-soft">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
            <h2 className="display display-h2">Our mission</h2>
            <p className="mt-6 max-w-2xl text-lg text-body">
              Indian businesses lose revenue every day to callbacks that slip and
              lists that never get worked. We started SvaraCall AI to fix that
              with voice agents that speak your customer&apos;s language, dial on
              your schedule, and log every outcome — reliably, compliantly, and at
              scale.
            </p>
          </div>
        </section>

        <section className="bg-canvas">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="display display-h2 max-w-3xl">What we stand for</h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              {values.map((value, i) => (
                <Reveal
                  key={value.title}
                  as="li"
                  delayMs={(i % 2) * 80}
                  className="rounded-card bg-canvas-soft p-7"
                >
                  <h3 className="text-xl font-bold text-ink">{value.title}</h3>
                  <p className="mt-2 text-body">{value.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-canvas-soft">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="display display-h2 max-w-3xl">
              Built by {site.legalName}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-body">
              We&apos;re a technology company focused on artificial intelligence
              and digital products, based in {site.city}, {site.state}. SvaraCall
              AI is one of the products we build and operate.
            </p>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {products.map((product) => (
                <li key={product.name}>
                  {product.external ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-card bg-canvas p-7 transition-colors hover:bg-primary-pale"
                    >
                      <h3 className="text-lg font-bold text-ink">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-body">{product.body}</p>
                      <span className="mt-4 text-sm font-semibold text-ink-deep">
                        Visit →
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={product.href}
                      className="group flex h-full flex-col rounded-card bg-canvas p-7 transition-colors hover:bg-primary-pale"
                    >
                      <h3 className="text-lg font-bold text-ink">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-body">{product.body}</p>
                      <span className="mt-4 text-sm font-semibold text-ink-deep">
                        Learn more →
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href={site.parentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
              >
                Visit {site.legalName.replace(" Private Limited", "")}
              </a>
            </div>

            <address className="mt-10 text-sm not-italic leading-relaxed text-mute">
              {site.legalName}
              <br />
              {site.city}, {site.state}, {site.country}
              <br />
              CIN: {site.cin}
            </address>
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
    </>
  );
}

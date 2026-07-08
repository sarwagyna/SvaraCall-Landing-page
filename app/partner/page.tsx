import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Partner With Us — Resell & Integrate SvaraCall AI",
  description:
    "Partner with SvaraCall AI as an agency, reseller, or technology partner. Bring AI outbound calling in Telugu, Hindi & English to your clients and earn with us.",
  alternates: { canonical: "/partner" },
};

const trail = [{ name: "Partner", path: "/partner" }];

const partnerTypes = [
  {
    title: "Agencies & consultants",
    body: "Add AI calling to the services you already sell. Bring reminders, follow-ups, and confirmations to your clients without building anything.",
  },
  {
    title: "Resellers",
    body: "Sell SvaraCall AI under a clear commercial model with margins, onboarding support, and shared collateral to help you close.",
  },
  {
    title: "Technology & integration",
    body: "Connect SvaraCall AI to your CRM, telephony, or vertical platform and give your users automated outbound calling out of the box.",
  },
];

const benefits = [
  {
    title: "Attractive economics",
    body: "Transparent, performance-linked commercials that reward the value you bring.",
  },
  {
    title: "Onboarding support",
    body: "Direct access to our team for enablement, demos, and technical setup.",
  },
  {
    title: "Compliance built in",
    body: "TRAI and DLT-registered, consent-first, DPDP-aligned — so you can sell with confidence.",
  },
  {
    title: "Fast to launch",
    body: "Run a live pilot with a client in days, not months, and show real outcomes early.",
  },
];

const steps = [
  {
    n: "1",
    title: "Tell us about you",
    body: "Share who you serve and how you'd like to work with SvaraCall AI.",
  },
  {
    n: "2",
    title: "Intro call",
    body: "A short conversation to align on fit, model, and a first opportunity.",
  },
  {
    n: "3",
    title: "Launch a pilot",
    body: "Run a live pilot with a client and see the results firsthand.",
  },
  {
    n: "4",
    title: "Grow together",
    body: "Scale up with ongoing support, shared collateral, and clear economics.",
  },
];

const partnerMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Partner with SvaraCall AI",
)}`;

export default function PartnerPage() {
  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <section className="bg-[#0b1110]">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
            <p className="eyebrow">Partner with us</p>
            <h1 className="display display-hero mt-4">
              Grow with SvaraCall AI.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-body">
              Bring AI outbound calling — in Telugu, Hindi, and English — to your
              clients. Whether you&apos;re an agency, a reseller, or a platform,
              we&apos;ll help you add voice automation that customers actually
              feel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={partnerMailto}
                className="inline-flex h-12 items-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
              >
                Become a partner
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-pill border border-white/20 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1110]">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="display display-h2 max-w-3xl">Ways to partner</h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {partnerTypes.map((type, i) => (
                <Reveal
                  key={type.title}
                  as="li"
                  delayMs={i * 80}
                  className="rounded-card border border-white/10 bg-[#121b18] p-7"
                >
                  <h3 className="text-xl font-bold text-ink">{type.title}</h3>
                  <p className="mt-2 text-body">{type.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#0b1110]">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="display display-h2 max-w-3xl">
              Why partners choose us
            </h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              {benefits.map((benefit, i) => (
                <Reveal
                  key={benefit.title}
                  as="li"
                  delayMs={(i % 2) * 80}
                  className="rounded-card border border-white/10 bg-[#121b18] p-7"
                >
                  <h3 className="text-xl font-bold text-ink">{benefit.title}</h3>
                  <p className="mt-2 text-body">{benefit.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#0b1110]">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="display display-h2 max-w-3xl">How it works</h2>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <Reveal
                  key={step.n}
                  as="li"
                  delayMs={(i % 4) * 70}
                  className="rounded-card border border-white/10 bg-[#121b18] p-7"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-pill bg-primary text-on-primary text-sm font-[900]">
                    {step.n}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-body">{step.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#0b1110]">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="rounded-card bg-[#0b1110] px-6 py-14 text-center ring-1 ring-white/10 md:px-12">
              <h2 className="display display-h2 text-white">
                Let&apos;s build together.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                Tell us about your business and the clients you serve. We&apos;ll
                get back within one business day.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href={partnerMailto}
                  className="inline-flex h-12 items-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
                >
                  Become a partner
                </a>
              </div>
            </div>
          </div>
        </section>
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

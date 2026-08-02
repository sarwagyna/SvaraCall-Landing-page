import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import SoftAuroraLazy from "@/components/SoftAuroraLazy";
import LanguageBand from "@/components/LanguageBand";
import MoreIndustryIntelligence from "@/components/industries/MoreIndustryIntelligence";
import InsuranceCallDemo from "@/components/industries/InsuranceCallDemo";
import InsuranceWorkflows from "@/components/industries/InsuranceWorkflows";
import {
  insuranceFaqs,
  insuranceHero,
  insuranceQuote,
  insuranceStats,
} from "@/lib/insurance";
import { bookPilotHref } from "@/lib/nav";

export default function InsuranceVertical() {
  return (
    <>
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

        <div className="industry-hero-zoom relative z-10 mx-auto grid max-w-6xl items-center gap-8 px-5 py-8 md:gap-10 md:py-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="eyebrow text-primary">{insuranceHero.eyebrow}</p>
            <h1 className="display display-hero mt-3 text-white">
              {insuranceHero.title}
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              {insuranceHero.subcopy}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={bookPilotHref}
                className="inline-flex h-12 items-center rounded-pill bg-primary px-7 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
              >
                Speed up renewals
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex h-12 items-center rounded-pill border border-white/25 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                See how it works
              </Link>
            </div>
          </div>

          <Reveal>
            <InsuranceCallDemo />
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3 md:py-16">
          {insuranceStats.map((stat, i) => (
            <Reveal
              key={stat.value}
              delayMs={i * 70}
              className="text-center sm:text-left"
            >
              <p className="display text-4xl text-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <InsuranceWorkflows />

      <section className="bg-canvas-soft">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <Reveal className="rounded-[28px] border border-primary/25 bg-canvas px-7 py-10 text-center md:px-12">
            <blockquote>
              <p className="text-xl leading-relaxed text-ink md:text-2xl">
                &ldquo;{insuranceQuote.text}&rdquo;
              </p>
              <footer className="mt-5 text-sm font-semibold text-body">
                — {insuranceQuote.author}
              </footer>
            </blockquote>
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {insuranceQuote.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-pill bg-primary-soft px-3.5 py-1.5 text-xs font-semibold text-primary"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="insurance-faq" className="bg-canvas">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <Reveal>
            <h2 className="display display-h2">
              Insurance voice AI: common questions
            </h2>
          </Reveal>
          <dl className="mt-10 divide-y divide-line">
            {insuranceFaqs.map((faq, i) => (
              <Reveal key={faq.q} delayMs={(i % 2) * 60}>
                <div className="py-7">
                  <dt className="text-lg font-bold text-ink">{faq.q}</dt>
                  <dd className="mt-2 text-body">{faq.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <LanguageBand
        title="Every language your insurance customers speak."
        body="SvaraCall ships Telugu, Hindi, and English today — with more Indian languages on the roadmap for regional books of business."
      />

      <MoreIndustryIntelligence currentSlug="insurance" />

      <CtaBand />
    </>
  );
}

import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import SoftAuroraLazy from "@/components/SoftAuroraLazy";
import LanguageBand from "@/components/LanguageBand";
import MoreIndustryIntelligence from "@/components/industries/MoreIndustryIntelligence";
import AutomotiveCallDemo from "@/components/industries/AutomotiveCallDemo";
import AutomotiveWorkflows from "@/components/industries/AutomotiveWorkflows";
import {
  automotiveFaqs,
  automotiveHero,
  automotiveQuote,
  automotiveStats,
} from "@/lib/automotive";
import { bookPilotHref } from "@/lib/nav";

export default function AutomotiveVertical() {
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

        <div className="industry-hero-zoom relative z-10 mx-auto grid max-w-6xl items-center gap-6 px-4 py-8 sm:gap-8 sm:px-5 sm:py-10 md:py-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="eyebrow text-primary">{automotiveHero.eyebrow}</p>
            <h1 className="display display-hero mt-3 text-white">
              {automotiveHero.title}
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              {automotiveHero.subcopy}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={bookPilotHref}
                className="inline-flex h-12 items-center rounded-pill bg-primary px-7 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
              >
                Book a pilot
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex h-12 items-center rounded-pill border border-white/25 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Hear how it works
              </Link>
            </div>
          </div>

          <Reveal>
            <AutomotiveCallDemo />
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas" aria-label="Automotive outcomes">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-5 sm:py-14 md:py-16">
          {automotiveStats.map((stat, i) => (
            <Reveal
              key={stat.value}
              delayMs={i * 70}
              className="text-center sm:text-left"
            >
              <p className="display text-3xl text-primary sm:text-4xl md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <AutomotiveWorkflows />

      <section className="bg-canvas-soft">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-5 sm:py-16 md:py-20">
          <Reveal className="rounded-[24px] border border-primary/25 bg-canvas px-6 py-9 text-center sm:rounded-[28px] sm:px-7 sm:py-10 md:px-12">
            <h2 className="display display-h2">
              Where busy dealerships keep bays full
            </h2>
            <blockquote className="mt-6">
              <p className="text-lg leading-relaxed text-ink sm:text-xl md:text-2xl">
                &ldquo;{automotiveQuote.text}&rdquo;
              </p>
              <footer className="mt-5 text-sm font-semibold text-body">
                — {automotiveQuote.author}
              </footer>
            </blockquote>
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {automotiveQuote.tags.map((tag) => (
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

      <section
        id="automotive-faq"
        aria-labelledby="automotive-faq-heading"
        className="bg-canvas"
      >
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-5 sm:py-16 md:py-24">
          <Reveal>
            <h2 id="automotive-faq-heading" className="display display-h2">
              Automotive voice AI: common questions
            </h2>
          </Reveal>
          <dl className="mt-10 divide-y divide-line">
            {automotiveFaqs.map((faq, i) => (
              <Reveal key={faq.q} delayMs={(i % 2) * 60}>
                <div className="py-6 sm:py-7">
                  <dt className="text-base font-bold text-ink sm:text-lg">
                    {faq.q}
                  </dt>
                  <dd className="mt-2 text-sm text-body sm:text-base">{faq.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <LanguageBand
        title="Every language your automotive customers speak."
        body="SvaraCall ships Telugu, Hindi, and English today — with more Indian languages on the roadmap for regional dealerships."
      />

      <MoreIndustryIntelligence currentSlug="automotive" />

      <CtaBand />
    </>
  );
}

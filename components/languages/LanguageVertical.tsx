import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import SoftAuroraLazy from "@/components/SoftAuroraLazy";
import LanguageCallDemo from "@/components/languages/LanguageCallDemo";
import LanguageLinks from "@/components/languages/LanguageLinks";
import type { LanguagePage } from "@/lib/languagePages";
import { bookPilotHref } from "@/lib/nav";

const scriptFontClass: Record<LanguagePage["script"], string> = {
  latin: "",
  devanagari: "font-devanagari",
  gurmukhi: "font-gurmukhi",
  bengali: "font-bengali",
  tamil: "font-tamil",
  telugu: "font-telugu",
  kannada: "font-kannada",
  malayalam: "font-malayalam",
  gujarati: "font-gujarati",
};

type LanguageVerticalProps = {
  page: LanguagePage;
};

export default function LanguageVertical({ page }: LanguageVerticalProps) {
  const nativeClass = scriptFontClass[page.script];
  const isLive = page.status === "live";

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

        <div className="industry-hero-zoom relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-primary">{page.eyebrow}</p>
            <p
              lang={page.langAttr}
              className={`mt-5 text-5xl font-semibold tracking-tight text-primary md:text-6xl ${nativeClass}`}
            >
              {page.nativeName}
            </p>
            <h1 className="display display-hero mt-3 text-white">
              {page.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">{page.subcopy}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={bookPilotHref}
                className="inline-flex h-12 items-center rounded-pill bg-primary px-7 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
              >
                {page.primaryCta}
              </Link>
              <Link
                href="/voice-agents"
                className="inline-flex h-12 items-center gap-2 rounded-pill border border-white/25 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <span
                  aria-hidden
                  className="flex h-5 w-5 items-center justify-center rounded-pill bg-white/15 text-[10px]"
                >
                  ▶
                </span>
                Hear voice samples
              </Link>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/40">
              {page.heroChips?.length
                ? "Dialects & accents"
                : "Works with your CRM or sheet"}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {(
                page.heroChips ?? [
                  "CRM sync",
                  "Sheet upload",
                  "Outcome dashboard",
                  "API",
                ]
              ).map((label) => (
                <li
                  key={label}
                  className="rounded-pill border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/65"
                >
                  {label}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm text-white/50">
              {isLive
                ? `Now available in ${page.name}.`
                : `${page.name} is on our expansion roadmap — Telugu, Hindi & English ship today.`}
            </p>
          </div>

          <Reveal>
            <LanguageCallDemo page={page} scriptClassName={nativeClass} />
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 md:py-16">
          {page.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delayMs={i * 60}
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

      <section className="bg-canvas-soft">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <Reveal>
            <h2 className="display display-h2 mx-auto max-w-3xl text-center">
              {page.useCasesTitle}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {page.useCases.map((card, i) => (
              <Reveal
                key={card.title}
                as="li"
                delayMs={i * 70}
                className="rounded-card bg-canvas p-7"
              >
                <h3 className="text-lg font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-body">{card.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-2">
          <Reveal>
            <h2 className="display display-h2">{page.voicesTitle}</h2>
            <ul className="mt-8 space-y-4">
              {page.voices.map((voice) => (
                <li
                  key={voice.name}
                  className="flex items-center gap-4 rounded-card bg-canvas-soft px-5 py-4"
                >
                  <span
                    aria-hidden
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-pill bg-primary text-sm font-bold text-on-primary"
                  >
                    ▶
                  </span>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-base font-bold text-ink ${nativeClass}`}
                      lang={page.langAttr}
                    >
                      {voice.name}
                    </p>
                    <p className="mt-0.5 text-sm text-body">
                      {voice.gender}
                      {voice.accent ? ` · ${voice.accent}` : ""} ·{" "}
                      {voice.locale}
                    </p>
                  </div>
                  <Link
                    href="/voice-agents"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    Listen
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={80}>
            <h2 className="display display-h2">{page.dialectsTitle}</h2>
            <p className="mt-4 text-lg text-body">{page.dialectsBody}</p>
            <div className="mt-8 rounded-card bg-[#0b1110] p-6 ring-1 ring-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Sample turn
              </p>
              <p
                lang={page.langAttr}
                className={`mt-3 text-lg leading-relaxed text-white ${nativeClass}`}
              >
                {page.dialectSample}
              </p>
              <p className="mt-2 text-sm italic text-white/55">
                {page.dialectSampleGloss}
              </p>
            </div>
            <blockquote className="mt-5 rounded-card border-l-4 border-primary bg-canvas-soft px-6 py-5">
              <p className="text-base font-medium leading-relaxed text-ink">
                &ldquo;{page.dialectQuote}&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas-soft">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <Reveal>
            <h2 className="display display-h2 text-primary">{page.faqsTitle}</h2>
          </Reveal>
          <dl className="mt-10 divide-y divide-line">
            {page.faqs.map((faq, i) => (
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

      <LanguageLinks currentSlug={page.slug} />

      <CtaBand />
    </>
  );
}

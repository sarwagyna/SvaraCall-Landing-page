import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import SoftAuroraLazy from "@/components/SoftAuroraLazy";
import type { SeoProgrammaticPage } from "@/lib/seoTypes";
import { bookPilotHref } from "@/lib/nav";

type Props = {
  page: SeoProgrammaticPage;
  hubHref: string;
  hubLabel: string;
};

export default function SeoProgrammaticPageView({
  page,
  hubHref,
  hubLabel,
}: Props) {
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

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="eyebrow text-primary">{page.eyebrow}</p>
          <h1 className="display display-hero mt-4 max-w-4xl text-white">
            {page.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">{page.subcopy}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={bookPilotHref}
              className="inline-flex h-12 items-center rounded-pill bg-primary px-7 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
            >
              {page.primaryCta ?? "Book a pilot"}
            </Link>
            <Link
              href={hubHref}
              className="inline-flex h-12 items-center rounded-pill border border-white/25 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              {hubLabel}
            </Link>
          </div>

          {page.chips && page.chips.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-2">
              {page.chips.map((label) => (
                <li
                  key={label}
                  className="rounded-pill border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/65"
                >
                  {label}
                </li>
              ))}
            </ul>
          ) : null}
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
          <p className="eyebrow">Problem</p>
          <h2 className="display display-h2 mt-3 max-w-3xl">
            {page.problemTitle}
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-body">{page.problem}</p>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Today</p>
            <h2 className="display display-h2 mt-3">{page.currentTitle}</h2>
            <ol className="mt-8 flex flex-col gap-4">
              {page.currentSteps.map((step, i) => (
                <li key={step} className="flex gap-4 text-body">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-pill bg-canvas-soft text-sm font-bold text-ink">
                    {i + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow">With SvaraCall</p>
            <h2 className="display display-h2 mt-3">{page.aiTitle}</h2>
            <ol className="mt-8 flex flex-col gap-4">
              {page.aiSteps.map((step, i) => (
                <li key={step} className="flex gap-4 text-body">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-pill bg-primary-soft text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-canvas-soft">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="display display-h2 max-w-3xl">{page.benefitsTitle}</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {page.benefits.map((card, i) => (
              <Reveal
                key={card.title}
                as="li"
                delayMs={(i % 2) * 70}
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
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="display display-h2 max-w-3xl">{page.roiTitle}</h2>
          <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.roi.map((stat, i) => (
              <Reveal
                key={stat.label}
                delayMs={i * 60}
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
      </section>

      {page.tableHeaders && page.tableRows ? (
        <section className="bg-canvas-soft">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="display display-h2 max-w-3xl">
              {page.tableTitle ?? "Comparison"}
            </h2>
            <div className="mt-10 overflow-x-auto rounded-card bg-canvas">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-line">
                    {page.tableHeaders.map((h) => (
                      <th
                        key={h}
                        className="px-5 py-4 font-semibold text-ink"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.tableRows.map((row) => (
                    <tr key={row.join("-")} className="border-b border-line/60">
                      {row.map((cell, i) => (
                        <td
                          key={`${cell}-${i}`}
                          className={`px-5 py-4 text-body ${i === 0 ? "font-semibold text-ink" : ""}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      {page.scriptExcerpt ? (
        <section className="bg-canvas-soft">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="display display-h2 max-w-3xl">
              {page.scriptTitle ?? "Sample call flow"}
            </h2>
            <pre className="mt-8 overflow-x-auto rounded-card bg-ink p-6 text-sm leading-relaxed whitespace-pre-wrap text-white/85 md:p-8">
              {page.scriptExcerpt}
            </pre>
          </div>
        </section>
      ) : null}

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="display display-h2 max-w-3xl">{page.implTitle}</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {page.implementation.map((step, i) => (
              <Reveal
                key={step.title}
                as="li"
                delayMs={(i % 2) * 70}
                className="rounded-card bg-canvas-soft p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-body">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-canvas-soft">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="display display-h2 max-w-3xl">{page.relatedTitle}</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {page.related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-pill border border-line bg-canvas px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-primary/40 hover:text-ink-deep"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="display display-h2 max-w-3xl">{page.faqsTitle}</h2>
          <dl className="mt-10 flex flex-col gap-4">
            {page.faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-card bg-canvas-soft px-6 py-5 md:px-8"
              >
                <dt className="text-base font-bold text-ink">{faq.q}</dt>
                <dd className="mt-2 text-body">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-5 pb-16 md:pb-24">
          <div className="rounded-card bg-ink px-6 py-14 text-center md:px-12">
            <h2 className="display display-h2 text-white">
              {page.ctaTitle}{" "}
              <span className="text-primary">{page.ctaAccent}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              {page.ctaBody}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={bookPilotHref}
                className="inline-flex h-12 items-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
              >
                Book a pilot
              </Link>
              <Link
                href={hubHref}
                className="inline-flex h-12 items-center rounded-pill border border-white/30 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                {hubLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

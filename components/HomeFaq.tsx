"use client";

import Link from "next/link";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/lib/content";
import { homeFaqs } from "@/lib/homeFaq";
import { bookPilotHref } from "@/lib/nav";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={`h-5 w-5 shrink-0 text-ink/70 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="m6 8 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-canvas-soft">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20 xl:gap-28">
        {/* Left column */}
        <div className="lg:pt-2">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-[2.5rem] md:leading-[1.15]">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 max-w-sm text-base text-body">
            Have more doubts? Reach out to us at{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-ink-deep underline decoration-ink-deep/30 underline-offset-2 transition-colors hover:text-positive-deep hover:decoration-positive-deep/40"
            >
              {site.email}
            </a>
          </p>

          <div className="mt-10 rounded-3xl bg-canvas p-6 shadow-[0_1px_3px_rgba(14,15,12,0.06)] md:p-8">
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-[1.35rem] md:leading-snug">
              Need AI outbound calling on your leads?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-body md:text-[0.95rem]">
              Book a pilot and hear SvaraCall place a live call to your phone —
              in Telugu, Hindi, or English — before you commit to anything.
            </p>
            <Link
              href={bookPilotHref}
              onClick={() => trackEvent("faq_cta_clicked")}
              className="mt-6 inline-flex h-12 items-center gap-3 rounded-xl bg-[#0b1110] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#12201b]"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="h-4 w-4 text-on-primary"
                  aria-hidden="true"
                >
                  <circle cx="3" cy="8" r="1.25" fill="currentColor" />
                  <circle cx="8" cy="8" r="1.25" fill="currentColor" />
                  <circle cx="13" cy="8" r="1.25" fill="currentColor" />
                  <circle cx="5.5" cy="4.5" r="1" fill="currentColor" opacity="0.7" />
                  <circle cx="10.5" cy="11.5" r="1" fill="currentColor" opacity="0.7" />
                </svg>
              </span>
              Book a pilot
            </Link>
          </div>
        </div>

        {/* Right column — accordion */}
        <div className="border-t border-ink/10 lg:border-t-0">
          {homeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `home-faq-panel-${index}`;
            const buttonId = `home-faq-button-${index}`;
            const isLast = index === homeFaqs.length - 1;

            return (
              <div
                key={faq.question}
                className={isLast ? "" : "border-b border-ink/10"}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => {
                      setOpenIndex(isOpen ? null : index);
                      if (!isOpen) {
                        trackEvent("faq_opened", { index });
                      }
                    }}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-medium text-ink transition-colors hover:text-ink-deep md:py-6 md:text-[1.05rem]"
                  >
                    <span>{faq.question}</span>
                    <Chevron open={isOpen} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 pr-8 text-sm leading-relaxed text-body md:pb-6 md:text-[0.95rem]"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  automotiveTabs,
  automotiveWorkflows,
  type AutomotiveTab,
} from "@/lib/automotive";
import { bookPilotHref } from "@/lib/nav";

export default function AutomotiveWorkflows() {
  const [tab, setTab] = useState<AutomotiveTab>("service");
  const [activeId, setActiveId] = useState("service-booking");

  const visible = useMemo(
    () => automotiveWorkflows.filter((item) => item.tab === tab),
    [tab],
  );

  return (
    <section
      id="automotive-workflows"
      aria-labelledby="automotive-workflows-heading"
      className="bg-canvas"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">Workflows</p>
          <h2
            id="automotive-workflows-heading"
            className="display display-h2 mt-3 max-w-3xl"
          >
            What SvaraCall runs in this vertical
          </h2>
          <p className="mt-4 max-w-2xl text-base text-body sm:mt-5 sm:text-lg">
            Service booking, PSF coverage, and sales callbacks — so bays stay
            full and every delivered job gets a follow-up.
          </p>
        </Reveal>

        <div
          className="mt-8 -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Filter automotive workflows"
        >
          {automotiveTabs.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setTab(item.id);
                  const first = automotiveWorkflows.find((w) => w.tab === item.id);
                  if (first) setActiveId(first.id);
                }}
                className={`shrink-0 rounded-pill px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-primary text-on-primary"
                    : "bg-canvas-soft text-body hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <Reveal className="mt-8 rounded-[24px] bg-canvas-soft p-5 ring-1 ring-line sm:rounded-[28px] sm:p-6 md:p-8">
          <ul className="space-y-2">
            {visible.map((item) => {
              const active = item.id === activeId;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`flex w-full items-center gap-3 rounded-[18px] px-3.5 py-3.5 text-left transition-colors sm:px-4 ${
                      active
                        ? "bg-primary-soft ring-1 ring-primary/30"
                        : "hover:bg-canvas"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                        active
                          ? "bg-primary text-on-primary"
                          : "bg-canvas text-ink-deep"
                      }`}
                    >
                      {active ? (
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      ) : (
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-ink">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm text-body">
                        {item.body}
                      </span>
                      {active ? (
                        <span
                          className="mt-3 flex h-7 items-end gap-1"
                          aria-hidden
                        >
                          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                            <span
                              key={i}
                              className="wave-bar w-1 rounded-pill bg-primary"
                              style={{
                                height: `${28 + ((i * 19) % 72)}%`,
                                animationDelay: `${i * 0.07}s`,
                              }}
                            />
                          ))}
                        </span>
                      ) : null}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <div className="mt-10 text-center">
          <Link
            href={bookPilotHref}
            className="inline-flex h-12 items-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
          >
            Book a free consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  brokerageTabs,
  brokerageWorkflows,
  type BrokerageTab,
} from "@/lib/brokerage";
import { bookPilotHref } from "@/lib/nav";

export default function BrokerageWorkflows() {
  const [tab, setTab] = useState<BrokerageTab>("onboarding");
  const [activeId, setActiveId] = useState("account-activation");

  const visible = useMemo(
    () => brokerageWorkflows.filter((item) => item.tab === tab),
    [tab],
  );

  return (
    <section id="brokerage-workflows" className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">Workflows</p>
          <h2 className="display display-h2 mt-3 max-w-3xl">
            Where SvaraCall runs in this vertical
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-body">
            Operational outbound only — activation, KYC, alerts, and escalation —
            never buy/sell recommendations.
          </p>
        </Reveal>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter brokerage workflows"
        >
          {brokerageTabs.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setTab(item.id);
                  const first = brokerageWorkflows.find((w) => w.tab === item.id);
                  if (first) setActiveId(first.id);
                }}
                className={`rounded-pill px-4 py-2 text-sm font-semibold transition-colors ${
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

        <Reveal className="mt-8 rounded-[28px] bg-canvas-soft p-6 ring-1 ring-line md:p-8">
          <ul className="space-y-2">
            {visible.map((item) => {
              const active = item.id === activeId;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`flex w-full items-center gap-3 rounded-[18px] px-4 py-3.5 text-left transition-colors ${
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
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
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
            View use cases &amp; hear them
          </Link>
        </div>
      </div>
    </section>
  );
}

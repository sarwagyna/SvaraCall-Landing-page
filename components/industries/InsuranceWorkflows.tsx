"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  insuranceLineTabs,
  insuranceWorkflows,
  type InsuranceLine,
} from "@/lib/insurance";
import { bookPilotHref } from "@/lib/nav";

export default function InsuranceWorkflows() {
  const [line, setLine] = useState<InsuranceLine>("all");
  const [activeId, setActiveId] = useState("policy-renewal");

  const visible = useMemo(
    () =>
      insuranceWorkflows.filter(
        (item) => line === "all" || item.lines.includes(line),
      ),
    [line],
  );

  const renewals = visible.filter((item) => item.category === "renewals");
  const sales = visible.filter((item) => item.category === "sales");

  return (
    <section id="insurance-workflows" className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">Workflows</p>
          <h2 className="display display-h2 mt-3 max-w-3xl">
            What SvaraCall runs in this vertical
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-body">
            Renewals, servicing, and sales outreach — tuned per line of business,
            logged on every call.
          </p>
        </Reveal>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter by insurance line"
        >
          {insuranceLineTabs.map((tab) => {
            const active = line === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setLine(tab.id)}
                className={`rounded-pill px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-primary text-on-primary"
                    : "bg-canvas-soft text-body hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[
            { title: "Renewals & service", items: renewals },
            { title: "Sales & lead generation", items: sales },
          ].map((group) => (
            <Reveal
              key={group.title}
              className="rounded-[28px] bg-canvas-soft p-6 ring-1 ring-line md:p-8"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-deep">
                {group.title}
              </h3>
              {group.items.length === 0 ? (
                <p className="mt-6 text-sm text-mute">
                  No workflows in this line yet — try All lines.
                </p>
              ) : (
                <ul className="mt-5 space-y-2">
                  {group.items.map((item) => {
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
                          <span className="tabular shrink-0 text-sm font-bold text-primary">
                            {item.metric}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={bookPilotHref}
            className="inline-flex h-12 items-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
          >
            Find more use cases
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { educationWorkflowGroups } from "@/lib/education";
import { bookPilotHref } from "@/lib/nav";

export default function EducationWorkflows() {
  const [activeId, setActiveId] = useState("welcome");

  return (
    <section id="education-workflows" className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">Workflows</p>
          <h2 className="display display-h2 mt-3 max-w-3xl">
            What SvaraCall runs in this vertical
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-body">
            Admissions outreach, intake chase, and student support — so counselors
            only take the conversations that convert.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {educationWorkflowGroups.map((group) => (
            <Reveal
              key={group.id}
              className="rounded-[28px] bg-canvas-soft p-6 ring-1 ring-line md:p-7"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-2">
                {group.items.map((item) => {
                  const active = item.id === activeId;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => setActiveId(item.id)}
                        className={`w-full rounded-[18px] px-3.5 py-3 text-left transition-colors ${
                          active
                            ? "bg-primary-soft ring-1 ring-primary/30"
                            : "hover:bg-canvas"
                        }`}
                      >
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
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
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
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/solutions"
            className="inline-flex h-12 items-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
          >
            View solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

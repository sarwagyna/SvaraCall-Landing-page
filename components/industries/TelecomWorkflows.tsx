"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  telecomWorkflowGroups,
  type TelecomWorkflowGroup,
} from "@/lib/telecom";
import { bookPilotHref } from "@/lib/nav";

function WorkflowGroupCard({
  group,
  defaultActiveId,
}: {
  group: TelecomWorkflowGroup;
  defaultActiveId: string;
}) {
  const [activeId, setActiveId] = useState(defaultActiveId);

  return (
    <Reveal className="rounded-[28px] bg-canvas-soft p-6 ring-1 ring-line md:p-8">
      <p className="eyebrow text-primary">{group.title}</p>
      <p className="mt-3 text-sm text-body">{group.description}</p>

      <ul className="mt-6 space-y-2">
        {group.items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`w-full rounded-[18px] px-4 py-3.5 text-left transition-colors ${
                  active
                    ? "bg-primary-soft ring-1 ring-primary/30"
                    : "hover:bg-canvas"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full ${
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
                          d="M3 5.5A2.5 2.5 0 015.5 3h2.1c.5 0 .95.3 1.15.75l1.1 2.5a1.25 1.25 0 01-.3 1.4L8.3 9a12.5 12.5 0 006.7 6.7l1.35-1.25a1.25 1.25 0 011.4-.3l2.5 1.1c.45.2.75.65.75 1.15v2.1A2.5 2.5 0 0118.5 21C10.5 21 3.5 14 3.5 6V5.5z"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-ink">
                        {item.title}
                      </span>
                      <span className="rounded-pill bg-canvas px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-mute">
                        {item.tag}
                      </span>
                    </span>
                    <span className="mt-1 block text-sm text-body">
                      {item.body}
                    </span>
                    {active ? (
                      <span
                        className="mt-3 flex h-8 items-end gap-1"
                        aria-hidden
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                          <span
                            key={i}
                            className="wave-bar w-1 rounded-pill bg-primary"
                            style={{
                              height: `${30 + ((i * 17) % 70)}%`,
                              animationDelay: `${i * 0.07}s`,
                            }}
                          />
                        ))}
                      </span>
                    ) : null}
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}

export default function TelecomWorkflows() {
  return (
    <section id="telecom-workflows" className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">Workflows</p>
          <h2 className="display display-h2 mt-3 max-w-3xl">
            What SvaraCall runs in this vertical
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-body">
            High-volume telecom care and IT support — dialed in the customer&apos;s
            language, logged on every call.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {telecomWorkflowGroups.map((group) => (
            <WorkflowGroupCard
              key={group.id}
              group={group}
              defaultActiveId={group.items[0]?.id ?? ""}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={bookPilotHref}
            className="inline-flex h-12 items-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
          >
            Book a customized demo
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import SoftAuroraLazy from "@/components/SoftAuroraLazy";
import Reveal from "@/components/Reveal";
import { bookPilotHref } from "@/lib/nav";
import {
  integrationCategories,
  integrationMark,
  integrationStats,
  integrations,
  type Integration,
  type IntegrationCategory,
  type IntegrationStatus,
} from "@/lib/integrations";

type StatusFilter = "all" | IntegrationStatus;
type CategoryFilter = "all" | IntegrationCategory;

function IntegrationCard({ item }: { item: Integration }) {
  const mark = integrationMark(item);

  return (
    <li className="group flex gap-3.5 rounded-2xl border border-line bg-surface/60 p-4 transition-colors hover:border-primary/35 hover:bg-surface-raised/80 sm:p-5">
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold tracking-tight text-white shadow-sm ring-1 ring-white/10"
        style={{ backgroundColor: item.color }}
        aria-hidden
      >
        {mark.slice(0, 4)}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-semibold text-ink sm:text-[15px]">
            {item.name}
          </h3>
          {item.status === "enterprise" ? (
            <span className="rounded-pill bg-white/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-mute">
              Enterprise
            </span>
          ) : (
            <span className="rounded-pill bg-primary-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              Ready
            </span>
          )}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-body">{item.description}</p>
      </div>
    </li>
  );
}

export default function IntegrationsCatalog() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filtered = useMemo(() => {
    return integrations.filter((item) => {
      if (status !== "all" && item.status !== status) return false;
      if (category !== "all" && item.category !== category) return false;
      if (!deferredQuery) return true;
      const haystack =
        `${item.name} ${item.description} ${item.category}`.toLowerCase();
      return haystack.includes(deferredQuery);
    });
  }, [deferredQuery, status, category]);

  const groups = useMemo(() => {
    const order =
      category === "all" ? integrationCategories : [category];
    return order
      .map((cat) => ({
        category: cat,
        items: filtered.filter((i) => i.category === cat),
      }))
      .filter((g) => g.items.length > 0);
  }, [filtered, category]);

  const statusTabs: { id: StatusFilter; label: string; count: number }[] = [
    { id: "all", label: "All", count: integrationStats.total },
    {
      id: "ready",
      label: "Connect in minutes",
      count: integrationStats.ready,
    },
    {
      id: "enterprise",
      label: "Enterprise",
      count: integrationStats.enterprise,
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-[#0b1110]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <SoftAuroraLazy
            speed={0.45}
            scale={1.5}
            brightness={0.7}
            color1="#163300"
            color2="#9fe870"
            noiseFrequency={2.0}
            bandHeight={0.4}
            bandSpread={1.0}
            enableMouseInteraction={false}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1110]/45 via-[#0b1110]/7 to-canvas"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-6 text-center sm:px-5 sm:pb-12 sm:pt-8 md:pb-14 md:pt-10">
          <Reveal>
            <p className="eyebrow text-primary">Integrations</p>
            <h1 className="display display-hero mx-auto mt-4 max-w-4xl text-[clamp(2rem,7.5vw,4.2rem)] text-white sm:mt-5">
              {integrationStats.total}+ integrations.{" "}
              <span className="text-primary">Your stack stays yours.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:mt-6 sm:text-lg">
              Search the catalog — connect in minutes where APIs allow, plus
              enterprise paths that need partner approval. SvaraCall is the
              conversation layer, not a walled garden.
            </p>
          </Reveal>

          <div className="mx-auto mt-8 max-w-2xl sm:mt-10">
            <label className="sr-only" htmlFor="integrations-search">
              Search integrations
            </label>
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-mute"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
              </svg>
              <input
                id="integrations-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search integrations…"
                className="h-12 w-full rounded-pill border border-line bg-surface/80 py-3 pl-12 pr-5 text-base text-ink outline-none transition-[box-shadow,border-color] placeholder:text-mute focus:border-primary/50 focus:ring-2 focus:ring-primary/25 sm:h-14 sm:py-3.5"
              />
            </div>
          </div>

          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
            role="tablist"
            aria-label="Connection type"
          >
            {statusTabs.map((tab) => {
              const active = status === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setStatus(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-pill px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-primary text-on-primary"
                      : "bg-white/6 text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`rounded-pill px-1.5 py-0.5 text-[11px] font-bold ${
                      active
                        ? "bg-on-primary/15 text-on-primary"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <nav
            aria-label="Integration categories"
            className="mt-5 flex flex-wrap items-center justify-center gap-1.5 sm:mt-6 sm:gap-2"
          >
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={`rounded-pill px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                category === "all"
                  ? "bg-white/12 text-white"
                  : "text-white/55 hover:text-white"
              }`}
            >
              All categories
            </button>
            {integrationCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-pill px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                  category === cat
                    ? "bg-white/12 text-white"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <section
        id="integrations-catalog"
        aria-labelledby="integrations-catalog-heading"
        className="bg-canvas"
      >
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-2 sm:px-5 sm:pb-16 md:pb-20 md:pt-4">
          <p
            id="integrations-catalog-heading"
            className="text-sm text-mute"
            aria-live="polite"
          >
            Showing{" "}
            <span className="font-semibold text-ink">{filtered.length}</span>{" "}
            integration{filtered.length === 1 ? "" : "s"}
            {deferredQuery ? (
              <>
                {" "}
                for &ldquo;{query.trim()}&rdquo;
              </>
            ) : null}
          </p>

          {groups.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-line bg-surface/40 px-6 py-14 text-center">
              <p className="text-lg font-semibold text-ink">No matches</p>
              <p className="mx-auto mt-2 max-w-md text-sm text-body">
                Try another search — or tell us what you need. If it has an API,
                we can usually bridge it.
              </p>
              <Link
                href={bookPilotHref}
                className="mt-6 inline-flex h-11 items-center justify-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
              >
                Ask about an integration
              </Link>
            </div>
          ) : (
            <div className="mt-8 space-y-12 sm:mt-10 sm:space-y-14">
              {groups.map((group) => (
                <div key={group.category} id={`cat-${group.category}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="display text-2xl text-ink sm:text-3xl">
                      {group.category}
                    </h2>
                    <span className="text-sm text-mute">
                      {group.items.length}
                    </span>
                  </div>
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                    {group.items.map((item) => (
                      <IntegrationCard key={item.id} item={item} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="mt-14 rounded-[2rem] bg-primary px-6 py-12 text-center text-on-primary sm:mt-16 sm:rounded-[2.5rem] sm:px-10 sm:py-14 md:px-14">
            <h2 className="display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight">
              Don&apos;t see yours?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-on-primary/80 sm:text-lg">
              If it has an API, we can usually bridge it — book a pilot and
              we&apos;ll map your stack in a live call.
            </p>
            <Link
              href={bookPilotHref}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-pill bg-on-primary px-8 text-base font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Book a pilot
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

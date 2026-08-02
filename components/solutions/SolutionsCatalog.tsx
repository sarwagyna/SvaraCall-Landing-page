"use client";

import Link from "next/link";
import { useState } from "react";
import SoftAuroraLazy from "@/components/SoftAuroraLazy";
import Reveal from "@/components/Reveal";
import SolutionsExplorer from "@/components/solutions/SolutionsExplorer";
import { SolutionIcon, toneClasses } from "@/components/solutions/SolutionIcon";
import {
  solutionFilters,
  solutionGroups,
  type SolutionFilter,
} from "@/lib/solutions";

export default function SolutionsCatalog() {
  const [filter, setFilter] = useState<SolutionFilter>("all");

  const visibleGroups = solutionGroups
    .map((group) => ({
      ...group,
      cards:
        filter === "all"
          ? group.cards
          : group.cards.filter((card) => card.filter === filter),
    }))
    .filter((group) => group.cards.length > 0);

  return (
    <>
      <section className="solutions-hero-compact relative overflow-hidden bg-[#0b1110]">
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

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-6 pt-3 text-center sm:px-5 sm:pb-8 sm:pt-4 md:pb-10 md:pt-5">
          <Reveal>
            <p className="eyebrow text-primary">Solutions</p>
            <h1 className="display display-hero mx-auto mt-2.5 max-w-3xl text-white sm:mt-3">
              What calling bottleneck can{" "}
              <span className="text-primary">SvaraCall</span> eliminate today?
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 sm:mt-3.5 sm:text-base">
              Name the routine outbound calls that stall your team — then chat
              with our assistant to map the workflow in Telugu, Hindi, or English.
            </p>
          </Reveal>

          <div className="mt-5 sm:mt-6">
            <SolutionsExplorer
              filter={filter}
              onFilterChange={setFilter}
              showFilters={false}
            />
          </div>
        </div>
      </section>

      <section
        id="solutions-catalog"
        aria-labelledby="solutions-catalog-heading"
        className="bg-canvas"
      >
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-5 sm:pb-16 sm:pt-8 md:pb-24 md:pt-10">
          <div
            className="mb-7 flex flex-wrap items-center gap-2 sm:mb-8"
            role="tablist"
            aria-label="Filter solutions by bottleneck type"
          >
            {solutionFilters.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(item.id)}
                  className={`rounded-pill px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-primary text-on-primary"
                      : "bg-white/5 text-white/65 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <Reveal>
            <h2
              id="solutions-catalog-heading"
              className="display display-h2 max-w-3xl"
            >
              Every call, understood. Every customer, known.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-body sm:mt-4 sm:text-lg">
              Browse outbound workflows by bottleneck — or ask the assistant to
              recommend one.
            </p>
          </Reveal>

          <div className="mt-8 space-y-12 sm:mt-10 sm:space-y-14">
            {visibleGroups.map((group) => (
              <div key={group.id}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-deep sm:text-sm">
                  {group.title}
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                  {group.cards.map((card, i) => {
                    const tone = toneClasses(card.tone);
                    const inner = (
                      <>
                        <SolutionIcon
                          id={card.id}
                          className={`h-6 w-6 sm:h-7 sm:w-7 ${tone.icon}`}
                        />
                        <h4
                          className={`mt-4 text-base font-bold sm:mt-5 sm:text-lg ${tone.title}`}
                        >
                          {card.title}
                        </h4>
                        <p
                          className={`mt-2 text-sm leading-relaxed ${tone.body}`}
                        >
                          {card.body}
                        </p>
                      </>
                    );

                    return (
                      <Reveal
                        key={card.id}
                        as="li"
                        delayMs={(i % 3) * 50}
                        className="h-full"
                      >
                        {card.href ? (
                          <Link
                            id={`solution-${card.id}`}
                            href={card.href}
                            className={`flex h-full min-h-[10.5rem] flex-col rounded-[20px] p-5 transition-transform duration-300 hover:-translate-y-0.5 sm:min-h-[11.5rem] sm:rounded-[22px] sm:p-6 ${tone.card}`}
                          >
                            {inner}
                          </Link>
                        ) : (
                          <div
                            id={`solution-${card.id}`}
                            className={`flex h-full min-h-[10.5rem] flex-col rounded-[20px] p-5 sm:min-h-[11.5rem] sm:rounded-[22px] sm:p-6 ${tone.card}`}
                          >
                            {inner}
                          </div>
                        )}
                      </Reveal>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { bookPilotWithParams } from "@/lib/nav";
import {
  LEAD_STEPS,
  PRICE_PER_MINUTE,
  ROI_INDUSTRIES,
  SETUP_FEE,
  computeRoi,
  formatRoiMultiple,
  inr,
  type RoiIndustryId,
} from "@/lib/roi";

const defaultIndustry = ROI_INDUSTRIES[0];

function nearestLeadIndex(value: number) {
  let best = 0;
  let bestDiff = Infinity;
  LEAD_STEPS.forEach((step, i) => {
    const diff = Math.abs(step - value);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = i;
    }
  });
  return best;
}

export default function RoiCalculator() {
  const [industryId, setIndustryId] = useState<RoiIndustryId>("healthcare");
  const [leadsIndex, setLeadsIndex] = useState(nearestLeadIndex(1000));
  const [avgValue, setAvgValue] = useState(defaultIndustry.avgValue);
  const [currentReachPct, setCurrentReachPct] = useState(
    Math.round(defaultIndustry.currentReach * 100),
  );
  const [assumptionsOpen, setAssumptionsOpen] = useState(false);
  const [reachRatePct, setReachRatePct] = useState(
    Math.round(defaultIndustry.reachRate * 100),
  );
  const [avgDuration, setAvgDuration] = useState(defaultIndustry.avgDuration);
  const [conversionPct, setConversionPct] = useState(
    Math.round(defaultIndustry.conversionRate * 100),
  );
  const interactedRef = useRef(false);

  const markInteracted = () => {
    if (!interactedRef.current) {
      interactedRef.current = true;
      trackEvent("roi_calculator_interacted");
    }
  };

  const applyIndustry = (id: RoiIndustryId) => {
    const industry = ROI_INDUSTRIES.find((item) => item.id === id);
    if (!industry) return;
    setIndustryId(id);
    setAvgValue(industry.avgValue);
    setReachRatePct(Math.round(industry.reachRate * 100));
    setAvgDuration(industry.avgDuration);
    setConversionPct(Math.round(industry.conversionRate * 100));
    setCurrentReachPct(Math.round(industry.currentReach * 100));
    markInteracted();
  };

  const leads = LEAD_STEPS[leadsIndex];
  const results = useMemo(
    () =>
      computeRoi({
        leads,
        avgValue,
        currentReachRate: currentReachPct / 100,
        reachRate: reachRatePct / 100,
        avgDuration,
        conversionRate: conversionPct / 100,
      }),
    [
      leads,
      avgValue,
      currentReachPct,
      reachRatePct,
      avgDuration,
      conversionPct,
    ],
  );

  const pilotHref = bookPilotWithParams({
    leads,
    industry: industryId,
    recovered: Math.round(results.recoveredRevenue),
  });

  return (
    <section id="roi-calculator" className="bg-[#0b1110] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow text-primary">ROI calculator</p>
        <h2 className="display display-h2 mt-4 max-w-3xl text-white">
          What could faster calling recover for you?
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-white/80">Industry</p>
              <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {ROI_INDUSTRIES.map((industry) => (
                  <li key={industry.id}>
                    <button
                      type="button"
                      onClick={() => applyIndustry(industry.id)}
                      aria-pressed={industryId === industry.id}
                      className={`w-full rounded-2xl px-3 py-3 text-left text-sm font-semibold ring-1 transition-all ${
                        industryId === industry.id
                          ? "bg-primary text-on-primary ring-primary shadow-[0_0_0_4px_rgba(159,232,112,0.15)]"
                          : "bg-white/[0.04] text-white ring-white/10 hover:bg-white/[0.07] hover:ring-white/25"
                      }`}
                    >
                      {industry.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="roi-leads" className="text-sm font-semibold text-white/80">
                  Leads / customers to call per month
                </label>
                <span className="tabular text-sm font-bold text-primary">
                  {leads.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                id="roi-leads"
                type="range"
                min={0}
                max={LEAD_STEPS.length - 1}
                step={1}
                value={leadsIndex}
                onChange={(e) => {
                  setLeadsIndex(Number(e.target.value));
                  markInteracted();
                }}
                className="roi-range mt-3 h-2 w-full cursor-pointer appearance-none rounded-pill bg-white/10"
                style={{
                  background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${(leadsIndex / (LEAD_STEPS.length - 1)) * 100}%, rgba(255,255,255,0.1) ${(leadsIndex / (LEAD_STEPS.length - 1)) * 100}%, rgba(255,255,255,0.1) 100%)`,
                }}
              />
            </div>

            <div>
              <label htmlFor="roi-avg-value" className="text-sm font-semibold text-white/80">
                Average revenue per converted customer (₹)
              </label>
              <input
                id="roi-avg-value"
                type="number"
                min={0}
                step={500}
                value={avgValue}
                onChange={(e) => {
                  setAvgValue(Math.max(0, Number(e.target.value) || 0));
                  markInteracted();
                }}
                className="mt-2 h-12 w-full rounded-input border border-white/10 bg-white/5 px-4 text-white outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="roi-reach" className="text-sm font-semibold text-white/80">
                  % of leads your team currently reaches
                </label>
                <span className="tabular text-sm font-bold text-primary">
                  {currentReachPct}%
                </span>
              </div>
              <input
                id="roi-reach"
                type="range"
                min={0}
                max={100}
                step={5}
                value={currentReachPct}
                onChange={(e) => {
                  setCurrentReachPct(Number(e.target.value));
                  markInteracted();
                }}
                className="roi-range mt-3 h-2 w-full cursor-pointer appearance-none rounded-pill bg-white/10"
                style={{
                  background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${currentReachPct}%, rgba(255,255,255,0.1) ${currentReachPct}%, rgba(255,255,255,0.1) 100%)`,
                }}
              />
            </div>

            <div className="rounded-card ring-1 ring-white/10">
              <button
                type="button"
                onClick={() => setAssumptionsOpen((open) => !open)}
                aria-expanded={assumptionsOpen}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-white"
              >
                Adjust assumptions
                <span aria-hidden="true" className="text-primary">
                  {assumptionsOpen ? "−" : "+"}
                </span>
              </button>
              {assumptionsOpen ? (
                <div className="space-y-5 border-t border-white/10 px-5 pb-5 pt-4">
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <label htmlFor="roi-svara-reach" className="text-sm text-white/70">
                        Reach rate with SvaraCall
                      </label>
                      <span className="tabular text-sm font-semibold text-primary">
                        {reachRatePct}%
                      </span>
                    </div>
                    <input
                      id="roi-svara-reach"
                      type="range"
                      min={10}
                      max={100}
                      step={5}
                      value={reachRatePct}
                      onChange={(e) => {
                        setReachRatePct(Number(e.target.value));
                        markInteracted();
                      }}
                      className="roi-range mt-2 h-2 w-full cursor-pointer appearance-none rounded-pill bg-white/10"
                    />
                  </div>
                  <div>
                    <label htmlFor="roi-duration" className="text-sm text-white/70">
                      Avg connected call duration (min)
                    </label>
                    <input
                      id="roi-duration"
                      type="number"
                      min={0.5}
                      max={10}
                      step={0.5}
                      value={avgDuration}
                      onChange={(e) => {
                        setAvgDuration(Math.max(0.5, Number(e.target.value) || 0.5));
                        markInteracted();
                      }}
                      className="mt-2 h-10 w-full rounded-input border border-white/10 bg-white/5 px-4 text-white outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    />
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <label htmlFor="roi-conversion" className="text-sm text-white/70">
                        Lead → customer conversion rate
                      </label>
                      <span className="tabular text-sm font-semibold text-primary">
                        {conversionPct}%
                      </span>
                    </div>
                    <input
                      id="roi-conversion"
                      type="range"
                      min={1}
                      max={50}
                      step={1}
                      value={conversionPct}
                      onChange={(e) => {
                        setConversionPct(Number(e.target.value));
                        markInteracted();
                      }}
                      className="roi-range mt-2 h-2 w-full cursor-pointer appearance-none rounded-pill bg-white/10"
                    />
                  </div>
                  <p className="text-sm text-white/70">
                    Price per connected minute:{" "}
                    <span className="font-semibold text-white/85">
                      ₹{PRICE_PER_MINUTE.toFixed(2)}
                    </span>{" "}
                    (fixed)
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-card bg-white/5 p-6 ring-1 ring-white/10 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                Estimated recovered revenue / month
              </p>
              <p className="display tabular mt-3 text-4xl text-primary md:text-5xl">
                {inr.format(Math.round(results.recoveredRevenue))}
              </p>

              <dl className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">Extra customers reached / month</dt>
                  <dd className="tabular font-semibold text-white">
                    {Math.round(results.incrementalCustomers).toLocaleString("en-IN")}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">Estimated SvaraCall cost / month</dt>
                  <dd className="tabular font-semibold text-white">
                    {inr.format(Math.round(results.svaraCostMonthly))}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-white/60">Net gain</dt>
                  <dd className="tabular font-semibold text-primary">
                    {inr.format(Math.round(results.netGain))}
                  </dd>
                </div>
              </dl>

              <p className="mt-6 text-sm font-semibold text-white/80">
                ≈ {formatRoiMultiple(results.roiMultiple)} return on calling spend
              </p>

              <p className="mt-4 text-xs leading-relaxed text-white/65">
                Estimates based on your inputs and adjustable assumptions — actual
                results vary by industry and list quality.
              </p>

              <Link
                href={pilotHref}
                onClick={() => trackEvent("roi_book_pilot_clicked")}
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-pill bg-primary px-6 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
              >
                Book a pilot with these numbers →
              </Link>

              <p className="mt-4 text-xs text-white/65">
                One-time setup fee of {inr.format(SETUP_FEE)} applies; not included in
                monthly estimates above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

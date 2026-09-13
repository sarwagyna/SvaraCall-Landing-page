"use client";

import { useEffect, useSyncExternalStore } from "react";
import SoftAuroraLazy from "./SoftAuroraLazy";
import LaunchCountdown from "./LaunchCountdown";
import {
  formatLaunchDisplayDate,
  formatLaunchDisplayTime,
  getIstNowMs,
  isLaunchLive,
} from "@/lib/launch";

function subscribeLaunchClock(onStoreChange: () => void) {
  let timeoutId = 0;
  const tick = () => {
    onStoreChange();
    if (isLaunchLive()) return;
    timeoutId = window.setTimeout(
      tick,
      Math.max(16, 1000 - (getIstNowMs() % 1000)),
    );
  };
  timeoutId = window.setTimeout(tick, 0);
  return () => window.clearTimeout(timeoutId);
}

function goToMarketingHome() {
  if (window.location.pathname === "/") {
    window.location.reload();
    return;
  }
  window.location.replace("/");
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-primary"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

function PilotBadge({ date }: { date: string }) {
  return (
    <p className="inline-flex max-w-full items-center rounded-pill border border-primary/25 bg-primary-soft px-4 py-2 text-left text-sm font-semibold text-primary">
      {date} launch is exclusively for pilot customers.
    </p>
  );
}

function LaunchOffer({ date }: { date: string }) {
  return (
    <section className="bg-canvas-soft">
      <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <PilotBadge date={date} />
        <p className="eyebrow mt-8">Pilot Launch Offer</p>
        <h2 className="display display-h2 mt-4">
          50% OFF introductory pricing*
        </h2>
        <p className="mt-3 text-2xl font-semibold text-primary md:text-3xl">
          + 500 free promo credits
        </p>
        <p className="mt-6 max-w-2xl text-lg text-body">
          For our pilot launch, the first pilot customers receive 50% off all
          introductory prices* plus 500 free promo credits.
        </p>
        <ul className="mt-8 grid gap-3 text-sm font-semibold text-ink sm:grid-cols-2">
          <li className="flex items-start gap-2 rounded-card bg-surface px-4 py-3">
            <CheckIcon />
            50% off introductory pricing*
          </li>
          <li className="flex items-start gap-2 rounded-card bg-surface px-4 py-3">
            <CheckIcon />
            500 free promo credits
          </li>
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-mute">
          *Usage credits are non-promo and are not included in the 50%
          introductory-price discount.
        </p>
        <p className="mt-8 max-w-xl text-body">
          Not a pilot? You can still submit your details and we&apos;ll contact
          you after launch.
        </p>
      </div>
    </section>
  );
}

export default function LaunchCampaign({
  serverLive,
}: {
  serverLive: boolean;
}) {
  const live = useSyncExternalStore(
    subscribeLaunchClock,
    isLaunchLive,
    () => serverLive,
  );
  const date = formatLaunchDisplayDate();
  const time = formatLaunchDisplayTime();

  useEffect(() => {
    if (!live) return;
    goToMarketingHome();
  }, [live]);

  if (live) {
    return null;
  }

  return (
    <>
      <section
        id="top"
        className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#0b1110] pt-[calc(60px+4.5em)] pb-16 md:min-h-[110dvh] md:pt-[calc(60px+7em)] md:pb-24"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <SoftAuroraLazy
            deferUntilWindowLoad
            deferUntilIdle
            idleTimeoutMs={3500}
            speed={0.5}
            scale={1.4}
            brightness={0.85}
            color1="#e8ebe6"
            color2="#9fe870"
            noiseFrequency={2.2}
            bandHeight={0.55}
            bandSpread={0.9}
            enableMouseInteraction={false}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[#0b1110]/55"
          aria-hidden
        />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
          <div className="mx-auto w-full max-w-4xl px-5">
            <p className="eyebrow text-white/85">Pilot launch</p>
            <h1 className="display display-hero mx-auto mt-6 max-w-3xl text-white">
              Something powerful is about to launch.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/75">
              SvaraCall Pilot Program launches on {date} at {time} IST.
            </p>
            <LaunchCountdown className="mx-auto mt-12 max-w-3xl" />
            <p className="mx-auto mt-10 max-w-xl text-lg font-semibold text-white/85">
              Built for businesses ready to put AI to work.
            </p>
            <p className="mx-auto mt-6 inline-flex rounded-pill border border-white/15 bg-[#101916]/80 px-5 py-2.5 text-sm font-semibold text-white/80">
              Pilot access opens at launch.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-pill border border-white/20 px-8 text-base font-semibold text-white transition-colors hover:bg-white/5"
              >
                Request access after launch
              </a>
            </div>
          </div>
        </div>
      </section>

      <LaunchOffer date={date} />
    </>
  );
}

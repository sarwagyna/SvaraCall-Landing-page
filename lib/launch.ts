import { site } from "@/lib/content";

/** Default pilot launch instant (IST). Override with NEXT_PUBLIC_LAUNCH_AT. */
export const DEFAULT_LAUNCH_AT = "2026-09-14T12:15:00+05:30";

export const launchHref = "/launch";

export type LaunchRemaining = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  complete: boolean;
};

function parseLaunchIso(raw: string | undefined): string {
  const value = raw?.trim();
  if (!value) return DEFAULT_LAUNCH_AT;
  const ms = Date.parse(value);
  return Number.isNaN(ms) ? DEFAULT_LAUNCH_AT : value;
}

/** Absolute launch timestamp, from env or the IST default. */
export function getLaunchIso(): string {
  return parseLaunchIso(process.env.NEXT_PUBLIC_LAUNCH_AT);
}

export function getLaunchTimestampMs(iso = getLaunchIso()): number {
  return Date.parse(iso);
}

export function formatLaunchDisplayDate(iso = getLaunchIso()): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(iso));
}

export function formatLaunchDisplayTime(iso = getLaunchIso()): string {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(new Date(iso));
}

/** Real IST now as an absolute instant. Date.now() is timezone-agnostic. */
export function getIstNowMs() {
  return Date.now();
}

export function getLaunchRemaining(
  nowMs: number,
  targetMs = getLaunchTimestampMs(),
): LaunchRemaining {
  const totalMs = Math.max(0, targetMs - nowMs);
  const totalSeconds = Math.floor(totalMs / 1000);
  return {
    totalMs,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    complete: totalMs <= 0,
  };
}

export function isLaunchLive(
  nowMs = getIstNowMs(),
  targetMs = getLaunchTimestampMs(),
): boolean {
  return nowMs >= targetMs;
}

/** Subscribe to the launch instant. Used by client countdown/nav (cleans up timers). */
export function subscribeLaunchLive(onStoreChange: () => void) {
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

function parseUntilIso(raw: string | undefined, fallback: string): string {
  const value = raw?.trim();
  if (!value) return fallback;
  const ms = Date.parse(value);
  return Number.isNaN(ms) ? fallback : value;
}

export function getLaunchHomeUntilIso(): string {
  return parseUntilIso(
    process.env.NEXT_PUBLIC_LAUNCH_HOME_UNTIL,
    getLaunchIso(),
  );
}

export function getLaunchHomeUntilMs(iso = getLaunchHomeUntilIso()): number {
  return Date.parse(iso);
}

/** True while the launch campaign should occupy the site homepage. */
export function isLaunchAsHomepage(
  nowMs = getIstNowMs(),
  untilMs = getLaunchHomeUntilMs(),
): boolean {
  return nowMs < untilMs;
}

export function getLaunchCanonicalPath() {
  return isLaunchAsHomepage() ? "/" : launchHref;
}

/**
 * Existing product access after the campaign gate.
 * Defaults to the SvaraCall app — the real account sign-in lives there.
 */
export const PILOT_ACCESS_URL =
  process.env.NEXT_PUBLIC_PILOT_ACCESS_URL?.trim() || site.appUrl;

/** Digest used by the public campaign gate. Not authentication. */
export const PILOT_ACCESS_DIGEST =
  "d7768b9499054d7eae27c145a8f83e32b82523512fa8bc2ae3f30b630ac5ad09";

export const launchSeo = {
  preTitle: (date = formatLaunchDisplayDate()) =>
    `SvaraCall — Pilot Launch | ${date}`,
  preDescription: (date = formatLaunchDisplayDate()) =>
    `SvaraCall launches its pilot program on ${date}. Pilot customers receive 50% off introductory pricing* and 500 free promo credits.`,
  liveTitle: "SvaraCall — Pilot Program Now Live",
  liveDescription:
    "The SvaraCall Pilot Program is now open. Pilot customers receive 50% off introductory pricing* and 500 free promo credits.",
} as const;

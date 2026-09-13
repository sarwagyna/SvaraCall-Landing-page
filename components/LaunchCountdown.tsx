"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import {
  getIstNowMs,
  getLaunchRemaining,
  getLaunchTimestampMs,
  type LaunchRemaining,
} from "@/lib/launch";

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

const UNREADY: LaunchRemaining = {
  totalMs: -1,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  complete: false,
};

let snapshotCache: LaunchRemaining = UNREADY;
let snapshotKey = "";

function readRemaining(targetMs: number): LaunchRemaining {
  const next = getLaunchRemaining(getIstNowMs(), targetMs);
  const key = `${targetMs}|${next.days}|${next.hours}|${next.minutes}|${next.seconds}|${Number(next.complete)}`;
  if (snapshotKey === key) return snapshotCache;
  snapshotKey = key;
  snapshotCache = next;
  return next;
}

type LaunchCountdownProps = {
  targetMs?: number;
  onComplete?: () => void;
  className?: string;
};

function padUnit(value: number) {
  return String(value).padStart(2, "0");
}

function CountdownSlot({
  value,
  label,
  ready,
}: {
  value: number;
  label: string;
  ready: boolean;
}) {
  const display = ready ? padUnit(value) : "--";
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center">
      <div className="flex w-full items-center justify-center rounded-card bg-[#101916]/80 px-2 py-4 shadow-sm ring-1 ring-white/10 backdrop-blur-sm sm:px-3 md:py-6">
        <span
          key={display}
          className="countdown-digit display tabular text-3xl text-white sm:text-4xl md:text-5xl"
        >
          {display}
        </span>
      </div>
      <span className="eyebrow mt-3 text-white/55">{label}</span>
    </div>
  );
}

export default function LaunchCountdown({
  targetMs = getLaunchTimestampMs(),
  onComplete,
  className = "",
}: LaunchCountdownProps) {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      let timeoutId = 0;
      const tick = () => {
        onStoreChange();
        if (getLaunchRemaining(getIstNowMs(), targetMs).complete) return;
        timeoutId = window.setTimeout(
          tick,
          Math.max(16, 1000 - (getIstNowMs() % 1000)),
        );
      };
      timeoutId = window.setTimeout(tick, 0);
      return () => window.clearTimeout(timeoutId);
    },
    [targetMs],
  );

  const remaining = useSyncExternalStore(
    subscribe,
    () => readRemaining(targetMs),
    () => UNREADY,
  );

  const completedRef = useRef(false);
  useEffect(() => {
    if (remaining === UNREADY || !remaining.complete || completedRef.current) {
      return;
    }
    completedRef.current = true;
    onComplete?.();
  }, [remaining, onComplete]);

  const ready = remaining !== UNREADY;

  return (
    <div
      className={className}
      role="timer"
      aria-atomic="true"
      aria-live="off"
      aria-label={
        ready
          ? `${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, ${remaining.seconds} seconds remaining`
          : "Launch countdown loading"
      }
    >
      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {units.map((unit) => (
          <CountdownSlot
            key={unit.key}
            value={remaining[unit.key]}
            label={unit.label}
            ready={ready}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
        India Standard Time
      </p>
    </div>
  );
}

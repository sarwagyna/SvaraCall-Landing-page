"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { educationCallLength, educationCallScript } from "@/lib/education";

const MS_PER_SECOND = 320;

function formatTimer(seconds: number) {
  const clamped = Math.min(seconds, educationCallLength);
  const mm = String(Math.floor(clamped / 60)).padStart(2, "0");
  const ss = String(clamped % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

export default function EducationCallDemo() {
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const play = useCallback(() => {
    stop();
    setElapsed(0);
    timerRef.current = setInterval(() => {
      setElapsed((prev) => {
        if (prev >= educationCallLength) {
          stop();
          return educationCallLength;
        }
        return prev + 1;
      });
    }, MS_PER_SECOND);
  }, [stop]);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      const id = requestAnimationFrame(() => setElapsed(educationCallLength));
      return () => cancelAnimationFrame(id);
    }

    const id = requestAnimationFrame(play);
    return () => {
      cancelAnimationFrame(id);
      stop();
    };
  }, [play, stop]);

  const done = elapsed >= educationCallLength;

  return (
    <div
      role="img"
      aria-label="Sample SvaraCall education admissions conversation"
      className="industry-call-demo min-h-[320px] w-full rounded-card bg-ink p-4 text-white ring-1 ring-white/10 sm:min-h-[360px] sm:p-5"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="live-dot h-2.5 w-2.5 rounded-pill bg-primary"
            aria-hidden="true"
          />
          <span className="text-sm font-semibold text-white/90">
            Outbound · Admissions enquiry
          </span>
        </div>
        <span className="tabular text-sm font-semibold text-primary">
          {formatTimer(elapsed)}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-b border-white/10 pb-4">
        <span className="tabular text-xs text-white/60">+91 98•• ••• 556</span>
        <div className="flex h-6 items-end gap-1" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <span
              key={i}
              className={`w-1 rounded-pill bg-primary/80 ${done ? "" : "wave-bar"}`}
              style={{ height: "100%", animationDelay: `${i * 0.09}s` }}
            />
          ))}
        </div>
      </div>

      <ol className="mt-5 space-y-3">
        {educationCallScript.map((line, i) => {
          const shown = elapsed >= line.t;
          const base =
            "transition-all duration-500 " +
            (shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2");

          if (line.kind === "status") {
            return (
              <li key={i} className={`${base} text-center`}>
                <span className="text-xs uppercase tracking-wider text-white/40">
                  {line.text}
                </span>
              </li>
            );
          }

          const isAgent = line.kind === "agent";
          return (
            <li
              key={i}
              className={`${base} flex ${isAgent ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[85%] rounded-card px-4 py-2.5 text-sm leading-snug ${
                  isAgent
                    ? "bg-white/10 text-white"
                    : "bg-primary text-on-primary"
                }`}
              >
                <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wider opacity-60">
                  {isAgent ? "SvaraCall" : "Customer"}
                </span>
                {"lang" in line && line.lang === "te" ? (
                  <span lang="te">{line.text}</span>
                ) : (
                  <span>{line.text}</span>
                )}
                {"gloss" in line && line.gloss ? (
                  <span className="mt-1 block text-xs italic opacity-70">
                    {line.gloss}
                  </span>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>

      <div
        className={`mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 transition-opacity duration-500 ${
          done ? "opacity-100" : "opacity-30"
        }`}
      >
        <span className="inline-flex items-center gap-2 rounded-pill bg-positive px-3 py-1.5 text-xs font-semibold text-white">
          <span aria-hidden="true">✓</span>
          Qualified · Counselor booked · Logged
        </span>
        <button
          type="button"
          onClick={play}
          className="inline-flex h-9 items-center rounded-pill border border-white/25 px-4 text-xs font-semibold text-white transition-colors hover:bg-white/10"
        >
          Replay
        </button>
      </div>
    </div>
  );
}

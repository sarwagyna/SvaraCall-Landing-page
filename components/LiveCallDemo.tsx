"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Line =
  | { t: number; kind: "status"; text: string }
  | { t: number; kind: "agent" | "customer"; text: string; lang?: "te"; gloss?: string };

// Scripted, business-neutral call (car service booking) — not a hospital.
// Every line stays in the DOM so crawlers index the Telugu + English text.
const script: Line[] = [
  { t: 0, kind: "status", text: "Dialing +91 98•• ••• 210" },
  { t: 3, kind: "status", text: "Connected" },
  {
    t: 5,
    kind: "agent",
    lang: "te",
    text: "నమస్తే రమేష్ గారు — శ్రీ మోటార్స్ నుండి మాట్లాడుతున్నాను.",
    gloss: "Namaste Ramesh garu — calling from Sree Motors.",
  },
  {
    t: 12,
    kind: "agent",
    text: "Your car service slot is tomorrow at 10:30 AM. Shall I confirm it?",
  },
  {
    t: 20,
    kind: "customer",
    lang: "te",
    text: "Evening lo kudirthunda?",
    gloss: "Can we do it in the evening?",
  },
  {
    t: 28,
    kind: "agent",
    text: "Sure — I can offer 5:15 PM instead. Does that work for you?",
  },
  { t: 36, kind: "customer", text: "Yes, 5:15 is perfect." },
  { t: 42, kind: "agent", text: "Done. See you at 5:15 PM tomorrow." },
];

const CALL_LENGTH = 47;
const MS_PER_SECOND = 300;

function formatTimer(seconds: number) {
  const clamped = Math.min(seconds, CALL_LENGTH);
  const mm = String(Math.floor(clamped / 60)).padStart(2, "0");
  const ss = String(clamped % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

export default function LiveCallDemo() {
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
        if (prev >= CALL_LENGTH) {
          stop();
          return CALL_LENGTH;
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
      // Jump straight to the finished state on the next frame (avoids a
      // synchronous setState inside the effect body).
      const id = requestAnimationFrame(() => setElapsed(CALL_LENGTH));
      return () => cancelAnimationFrame(id);
    }

    // Start playback on the next frame so the effect body stays free of
    // synchronous setState calls.
    const id = requestAnimationFrame(play);
    return () => {
      cancelAnimationFrame(id);
      stop();
    };
  }, [play, stop]);

  const done = elapsed >= CALL_LENGTH;

  return (
    <div
      role="img"
      aria-label="Sample SvaraCall conversation"
      className="min-h-[520px] w-full rounded-card bg-ink p-6 text-white shadow-2xl shadow-ink/20"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="live-dot h-2.5 w-2.5 rounded-pill bg-primary" aria-hidden="true" />
          <span className="text-sm font-semibold text-white/90">
            Outbound · Booking reminder
          </span>
        </div>
        <span className="tabular text-sm font-semibold text-primary">
          {formatTimer(elapsed)}
        </span>
      </div>

      {/* Sub-row: masked number + waveform */}
      <div className="mt-4 flex items-center justify-between border-b border-white/10 pb-4">
        <span className="tabular text-xs text-white/60">+91 98•• ••• 210</span>
        <div className="flex h-6 items-end gap-1" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <span
              key={i}
              className={`w-1 rounded-pill bg-primary/80 ${done ? "" : "wave-bar"}`}
              style={{
                height: `${100}%`,
                animationDelay: `${i * 0.09}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Transcript — all lines rendered in the DOM, revealed on a timeline */}
      <ol className="mt-5 space-y-3">
        {script.map((line, i) => {
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
                {line.lang === "te" ? (
                  <span lang="te">{line.text}</span>
                ) : (
                  <span>{line.text}</span>
                )}
                {line.gloss ? (
                  <span className="mt-1 block text-xs italic opacity-70">
                    {line.gloss}
                  </span>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>

      {/* Outcome */}
      <div
        className={`mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 transition-opacity duration-500 ${
          done ? "opacity-100" : "opacity-30"
        }`}
      >
        <span className="inline-flex items-center gap-2 rounded-pill bg-positive px-3 py-1.5 text-xs font-semibold text-white">
          <span aria-hidden="true">✓</span>
          Rescheduled → 5:15 PM · Logged to dashboard
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

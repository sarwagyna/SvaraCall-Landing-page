"use client";

import { useEffect, useRef, useState } from "react";
import { voices, type Voice } from "@/lib/content";

const BAR_COUNT = 34;
// Deterministic bar heights as fixed-precision percentage strings so the
// SSR and client markup match exactly (avoids float precision hydration drift).
const barHeights = Array.from({ length: BAR_COUNT }, (_, i) => {
  const v = Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.6));
  return ((0.25 + v * 0.75) * 100).toFixed(2);
});

function format(seconds: number) {
  const s = Math.max(0, Math.min(Math.floor(seconds), 5999));
  const mm = Math.floor(s / 60);
  const ss = String(s % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

function CardIcon({ type }: { type: Voice["icon"] }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (type === "target")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="0.6" fill="currentColor" />
      </svg>
    );
  if (type === "calendar")
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 5 6a2 2 0 0 1 0-2z" />
      <path d="M15 4h5m0 0v5m0-5-6 6" />
    </svg>
  );
}

export default function VoiceLibrary() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const rafOrIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stop = () => {
    if (rafOrIntervalRef.current) {
      clearInterval(rafOrIntervalRef.current);
      rafOrIntervalRef.current = null;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };

  useEffect(() => stop, []);

  const toggle = (voice: Voice) => {
    if (playingId === voice.id) {
      stop();
      setPlayingId(null);
      setElapsed(0);
      return;
    }

    stop();
    setPlayingId(voice.id);
    setElapsed(0);

    // Best-effort real audio playback when a sample file is provided.
    if (voice.src) {
      const audio = new Audio(voice.src);
      audioRef.current = audio;
      audio.play().catch(() => {
        /* no file yet — the visual timeline still runs */
      });
    }

    // Visual timeline (works with or without an audio file). Track elapsed time
    // by accumulating in the interval instead of reading the wall clock.
    let secs = 0;
    rafOrIntervalRef.current = setInterval(() => {
      secs += 0.1;
      if (secs >= voice.duration) {
        stop();
        setPlayingId(null);
        setElapsed(0);
      } else {
        setElapsed(secs);
      }
    }, 100);
  };

  return (
    <section id="voices" className="bg-[#0b1110]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="display display-h2 text-center text-white">
          Hear the AI in action
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-white/70">
          Preview SvaraCall&apos;s native Telugu voices — with Hindi and English
          also available.
        </p>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {voices.map((voice) => {
            const active = playingId === voice.id;
            const progress = active ? elapsed / voice.duration : 0;
            return (
              <li
                key={voice.id}
                className="rounded-card border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-input bg-white/10 text-white/80">
                    <CardIcon type={voice.icon} />
                  </span>
                  <button
                    type="button"
                    onClick={() => toggle(voice)}
                    aria-label={`${active ? "Pause" : "Play"} sample: ${voice.nameEn}, ${voice.style}, ${voice.langLabel}`}
                    aria-pressed={active}
                    className="grid h-11 w-11 place-items-center rounded-pill bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    {active ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <rect x="6" y="5" width="4" height="14" rx="1" />
                        <rect x="14" y="5" width="4" height="14" rx="1" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5z" />
                      </svg>
                    )}
                  </button>
                </div>

                <p className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M11 5 6 9H2v6h4l5 4V5z" />
                    <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                  </svg>
                  {voice.langLabel}
                </p>

                <h3 className="mt-1.5 text-xl font-bold text-white">
                  <span lang="te">{voice.name}</span>{" "}
                  <span className="text-white/90">{voice.nameEn}</span>
                </h3>
                <p className="mt-1 text-sm text-white/50">{voice.style}</p>

                {/* Waveform + timer */}
                <div className="mt-5 flex items-center gap-3 rounded-input bg-black/30 px-3 py-3">
                  <span className="tabular text-[11px] text-white/50">
                    {format(active ? elapsed : 0)}
                  </span>
                  <div
                    className="flex h-7 flex-1 items-center gap-[3px]"
                    aria-hidden="true"
                  >
                    {barHeights.map((h, i) => {
                      const filled = i / BAR_COUNT <= progress;
                      return (
                        <span
                          key={i}
                          className={`flex-1 rounded-pill ${filled ? "bg-primary" : "bg-white/20"}`}
                          style={{ height: `${h}%` }}
                        />
                      );
                    })}
                  </div>
                  <span className="tabular text-[11px] text-white/50">
                    {format(voice.duration)}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

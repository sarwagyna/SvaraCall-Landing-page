"use client";

import { useMemo, useRef, useState } from "react";
import { agentVoices, type VoiceUseCase } from "@/lib/content";

const useCaseFilters: ("All" | VoiceUseCase)[] = [
  "All",
  "Lead follow-up",
  "Reminders & confirmations",
  "Win-back & offers",
  "Onboarding & guidance",
  "Feedback & surveys",
];

const genderFilters = ["All", "Female", "Male"] as const;

export default function VoiceRoster() {
  const [useCase, setUseCase] = useState<(typeof useCaseFilters)[number]>("All");
  const [gender, setGender] = useState<(typeof genderFilters)[number]>("All");
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filtered = useMemo(
    () =>
      agentVoices.filter(
        (v) =>
          (useCase === "All" || v.useCase === useCase) &&
          (gender === "All" || v.gender === gender),
      ),
    [useCase, gender],
  );

  const togglePlay = (name: string, src?: string) => {
    const audio = audioRef.current;
    if (!audio || !src) return;

    if (playing === name) {
      audio.pause();
      setPlaying(null);
      return;
    }

    audio.src = src;
    audio.currentTime = 0;
    void audio.play().then(
      () => setPlaying(name),
      () => setPlaying(null),
    );
  };

  const chipBase =
    "rounded-pill px-4 py-2 text-sm font-semibold transition-colors";

  return (
    <section id="voice-roster" className="bg-canvas-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow">Voice library</p>
        <h2 className="display display-h2 mt-3 max-w-3xl">
          Pick a voice for your agent.
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-body">
          Choose from {agentVoices.length} ready voices across styles and use
          cases. Filter by use case or gender, then bring your pick to a pilot.
        </p>

        {/* Filters */}
        <div className="mt-8 flex flex-col gap-4">
          <div
            role="group"
            aria-label="Filter voices by use case"
            className="flex flex-wrap gap-2"
          >
            {useCaseFilters.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={useCase === option}
                onClick={() => setUseCase(option)}
                className={`${chipBase} ${
                  useCase === option
                    ? "bg-ink text-white"
                    : "bg-canvas text-body hover:text-ink"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div
            role="group"
            aria-label="Filter voices by gender"
            className="flex flex-wrap gap-2"
          >
            {genderFilters.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={gender === option}
                onClick={() => setGender(option)}
                className={`${chipBase} ${
                  gender === option
                    ? "bg-primary text-on-primary"
                    : "bg-canvas text-body hover:text-ink"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm font-semibold text-mute" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "voice" : "voices"}
        </p>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((voice) => {
            const isPlaying = playing === voice.name;
            return (
              <li
                key={voice.name}
                className="flex items-center gap-4 rounded-card bg-canvas p-5"
              >
                <button
                  type="button"
                  onClick={() => togglePlay(voice.name, voice.src)}
                  disabled={!voice.src}
                  aria-label={
                    voice.src
                      ? `${isPlaying ? "Pause" : "Play"} ${voice.name} sample`
                      : `${voice.name} sample coming soon`
                  }
                  title={voice.src ? undefined : "Sample coming soon"}
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-pill transition-colors ${
                    voice.src
                      ? "bg-ink text-primary hover:bg-ink-deep"
                      : "cursor-not-allowed bg-canvas-soft text-mute"
                  }`}
                >
                  {isPlaying ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <rect x="6" y="5" width="4" height="14" rx="1" />
                      <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
                    </svg>
                  )}
                </button>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="truncate text-base font-bold text-ink">
                      {voice.name}
                    </h3>
                    <span className="shrink-0 text-xs font-semibold text-mute">
                      {voice.gender}
                    </span>
                  </div>
                  <p className="mt-0.5 truncate text-sm text-body">
                    {voice.style}
                  </p>
                  <div className="mt-2">
                    <span className="rounded-pill bg-canvas-soft px-2.5 py-1 text-xs font-semibold text-body">
                      {voice.useCase}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <audio
          ref={audioRef}
          onEnded={() => setPlaying(null)}
          className="hidden"
          preload="none"
        />

        {filtered.length === 0 && (
          <p className="mt-8 text-body">
            No voices match that combination. Try a different filter.
          </p>
        )}
      </div>
    </section>
  );
}

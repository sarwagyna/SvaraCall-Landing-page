import SoftAuroraLazy from "./SoftAuroraLazy";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";
import HeroEyebrow from "./HeroEyebrow";

const trustFeatures = [
  "No card required",
  "Setup in minutes",
  "99% uptime",
];

const languageChips = ["हिन्दी", "తెలుగు", "English"];

function CheckCircleIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-positive"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

const waveformHeights = [
  28, 42, 56, 38, 64, 48, 72, 44, 60, 36, 52, 68, 40, 58, 34, 50, 66, 46, 62,
  38, 54, 70, 42, 58, 32, 48, 64, 44, 60, 36, 52, 68, 40, 56, 30, 46, 62, 42,
  58, 34, 50, 66, 38, 54, 72, 44, 60, 36, 52, 68, 40, 58, 32, 48, 64, 44, 60,
  36, 52, 68, 40, 56, 34, 50, 66, 42, 58, 38, 54, 70, 44, 60, 36, 52, 68, 40,
  58, 32, 48, 64, 44, 60, 36, 52, 68, 40, 56, 34, 50, 66, 38, 54, 72, 44, 60,
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100dvh-60px)] flex-col overflow-hidden bg-[#0b1110] pt-[calc(60px+2.5em)] pb-8 md:pt-[calc(60px+3.5em)] md:pb-12"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <SoftAuroraLazy
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
      <div className="pointer-events-none absolute inset-0 bg-[#0b1110]/55" aria-hidden />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        <div className="mx-auto w-full max-w-4xl px-5 pb-14 md:pb-20">
          <HeroEyebrow />
          <h1 className="display display-hero mx-auto mt-6 max-w-3xl text-white md:mt-8">
            Missed calls are missed customers.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/75 md:mt-10">
            SvaraCall AI is an AI voice agent that makes a business&apos;s
            outbound calls — lead follow-ups, appointment reminders, payment
            reminders — in Telugu, Hindi, and English, and logs every outcome
            automatically. Premium, human-grade calling at a fraction of a
            calling team&apos;s cost.
          </p>

          <HeroActions />

          <div className="relative mt-14 w-full md:mt-16">
            <div
              className="pointer-events-none absolute inset-x-0 -bottom-6 flex h-36 items-end justify-center gap-[3px] opacity-30 md:h-44"
              aria-hidden
            >
              {waveformHeights.map((height, index) => (
                <div
                  key={index}
                  className="w-px rounded-pill bg-primary/50"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-3">
              {trustFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-1.5 text-sm font-semibold text-white/85"
                >
                  <CheckCircleIcon />
                  {feature}
                </li>
              ))}
            </ul>
            <ul className="relative mt-6 flex flex-wrap justify-center gap-2.5">
              {languageChips.map((language) => (
                <li
                  key={language}
                  className={`rounded-pill border border-white/15 bg-[#101916]/90 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-black/30${
                    language === "తెలుగు" ? " font-telugu" : ""
                  }`}
                >
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-5 pb-20 md:pb-28">
          <HeroStats />
        </div>
      </div>
    </section>
  );
}

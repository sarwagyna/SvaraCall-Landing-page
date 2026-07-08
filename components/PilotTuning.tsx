import Reveal from "./Reveal";
import { tuningSteps, type TuningStep } from "@/lib/content";

function StepIcon({ type }: { type: TuningStep["icon"] }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (type === "document")
    return (
      <svg {...common}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </svg>
    );
  if (type === "sliders")
    return (
      <svg {...common}>
        <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" />
        <path d="M2 14h4M10 8h4M18 16h4" />
      </svg>
    );
  if (type === "users")
    return (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function PilotTuning() {
  return (
    <section id="pilot-tuning" className="bg-[#0b1110]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="display display-h2 text-center">
          Every pilot is tuned before it goes live.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-body">
          Before SvaraCall places a single customer call, we tune the script,
          the conversation, and the workflow with your team.
        </p>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-white/15 md:block"
          />
          <ol className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {tuningSteps.map((step, i) => (
              <Reveal
                key={step.title}
                as="li"
                delayMs={i * 90}
                className="flex flex-col items-center text-center"
              >
                <span className="grid h-16 w-16 place-items-center rounded-input bg-[#121b18] text-primary shadow-lg shadow-black/20 ring-1 ring-white/10">
                  <StepIcon type={step.icon} />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[16rem] text-sm text-body">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

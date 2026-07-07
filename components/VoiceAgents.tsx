import Link from "next/link";
import Reveal from "./Reveal";
import { voiceAgents, type VoiceAgent } from "@/lib/content";
import { bookPilotHref } from "@/lib/nav";

function AgentIcon({ type }: { type: VoiceAgent["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (type === "inbound")
    return (
      <svg {...common}>
        <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 5 6a2 2 0 0 1 0-2z" />
        <path d="M20 4l-6 6m0 0h5m-5 0V5" />
      </svg>
    );
  if (type === "outbound")
    return (
      <svg {...common}>
        <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 5 6a2 2 0 0 1 0-2z" />
        <path d="M15 4h5m0 0v5m0-5-6 6" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" />
      <path d="M2 14h4M10 8h4M18 16h4" />
    </svg>
  );
}

export default function VoiceAgents({
  headingLevel = 2,
}: {
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <section id="voice-agents" className="bg-canvas-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Heading className="display display-h2 max-w-3xl">
          AI voice agents for every calling job.
        </Heading>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {voiceAgents.map((agent, i) => (
            <Reveal
              key={agent.title}
              as="li"
              delayMs={i * 80}
              className="rounded-card bg-canvas p-7"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-input bg-ink text-primary">
                  <AgentIcon type={agent.icon} />
                </span>
                <span className="eyebrow text-mute">AI Voice</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{agent.title}</h3>
              <p className="mt-2 text-body">{agent.body}</p>
            </Reveal>
          ))}
        </ul>

        {/* Revenue systems callout */}
        <div className="mt-8 rounded-card bg-ink px-6 py-12 text-center md:px-12">
          <p className="eyebrow text-primary">Revenue systems</p>
          <h3 className="display display-h2 mt-3 text-white">
            Need a complete transformation?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Stop stitching tools together. We build fully integrated, end-to-end
            systems that clear operational bottlenecks and scale seamlessly.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href={bookPilotHref}
              className="inline-flex h-12 items-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
            >
              Book a pilot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

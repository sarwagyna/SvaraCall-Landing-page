import Link from "next/link";
import Reveal from "./Reveal";
import Marquee from "./Marquee";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const solutions = [
  {
    title: "Lead follow-up & qualification",
    body: "Calls new leads within minutes, qualifies, and books the next step.",
  },
  {
    title: "Appointment & booking reminders",
    body: "Confirms, reschedules, and logs the outcome.",
  },
  {
    title: "No-show recovery",
    body: "Wins back booked-but-vanished customers.",
  },
  {
    title: "Payment & renewal reminders",
    body: "Polite, consistent, on schedule.",
  },
  {
    title: "Order & delivery updates",
    body: "Confirms orders and delivery windows.",
  },
];

const marqueeItems = solutions.map((s) => s.title);

export default function Solutions() {
  return (
    <section id="solutions" className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Marquee label="Calls SvaraCall automates" items={marqueeItems} />

        <p className="eyebrow mt-14">Our solutions</p>
        <HeroHighlight>
          <Reveal>
            <h2 className="display display-h2 mt-4 max-w-3xl">
              One agent.{" "}
              <Highlight className="text-ink">Every routine call.</Highlight>
            </h2>
          </Reveal>
        </HeroHighlight>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((card, i) => (
            <Reveal
              key={card.title}
              as="li"
              delayMs={(i % 3) * 70}
              className="rounded-card bg-canvas-soft p-7"
            >
              <h3 className="text-lg font-bold text-ink">{card.title}</h3>
              <p className="mt-2 text-body">{card.body}</p>
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 text-center text-lg font-semibold text-ink">
          Every call in Telugu, Hindi, or English — matched to each customer.
        </p>

        <p className="mt-6 text-center">
          <Link
            href="/voice-agents"
            className="text-sm font-semibold text-ink-deep hover:underline"
          >
            See voice agents →
          </Link>
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";
import Reveal from "./Reveal";
import Marquee from "./Marquee";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { SolutionIcon, toneClasses } from "./solutions/SolutionIcon";
import { allSolutionCards } from "@/lib/solutions";

const featured = allSolutionCards.filter((card) =>
  [
    "lead-follow-up",
    "appointment-reminders",
    "no-show-recovery",
    "payment-reminders",
    "order-updates",
    "win-back",
  ].includes(card.id),
);

const marqueeItems = featured.map((s) => s.title);

export default function Solutions() {
  return (
    <section id="solutions" className="section-cv bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Marquee label="Calls SvaraCall automates" items={marqueeItems} />

        <p className="eyebrow mt-14">Our solutions</p>
        <HeroHighlight>
          <Reveal>
            <h2 className="display display-h2 mt-4 max-w-3xl">
              What bottleneck can{" "}
              <Highlight className="text-ink">SvaraCall</Highlight> clear?
            </h2>
          </Reveal>
        </HeroHighlight>
        <p className="mt-5 max-w-2xl text-lg text-body">
          Routine outbound calls — follow-ups, reminders, recoveries — handled
          in Telugu, Hindi, or English, with every outcome logged.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((card, i) => {
            const tone = toneClasses(card.tone);
            return (
              <Reveal
                key={card.id}
                as="li"
                delayMs={(i % 3) * 70}
                className="h-full"
              >
                <Link
                  href="/solutions"
                  className={`flex h-full min-h-[10.5rem] flex-col rounded-[22px] p-6 transition-transform duration-300 hover:-translate-y-0.5 ${tone.card}`}
                >
                  <SolutionIcon
                    id={card.id}
                    className={`h-6 w-6 ${tone.icon}`}
                  />
                  <p className={`mt-4 text-lg font-bold ${tone.title}`}>
                    {card.title}
                  </p>
                  <p className={`mt-2 text-sm leading-relaxed ${tone.body}`}>
                    {card.body}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <p className="mt-10 text-center text-lg font-semibold text-ink">
          Every call in Telugu, Hindi, or English — matched to each customer.
        </p>

        <p className="mt-6 text-center">
          <Link
            href="/solutions"
            className="inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
          >
            Explore all solutions →
          </Link>
        </p>
      </div>
    </section>
  );
}

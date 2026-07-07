import Reveal from "./Reveal";
import { industries, answers } from "@/lib/content";

export default function Industries({
  headingLevel = 2,
}: {
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <section id="industries" className="bg-canvas-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Heading className="display display-h2 max-w-3xl">
          Which industries use AI outbound calling?
        </Heading>
        <p className="mt-5 max-w-3xl text-lg text-body">{answers.industries}</p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((card, i) => (
            <Reveal
              key={card.title}
              as="li"
              delayMs={(i % 3) * 70}
              className="rounded-card bg-canvas p-7"
            >
              <h3 className="text-lg font-bold text-ink">{card.title}</h3>
              <p className="mt-2 text-body">{card.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

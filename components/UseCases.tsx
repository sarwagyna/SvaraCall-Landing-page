import Reveal from "./Reveal";
import { useCases, answers } from "@/lib/content";

export default function UseCases({
  headingLevel = 2,
}: {
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <section id="use-cases" className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Heading className="display display-h2 max-w-3xl">
          What can businesses automate with SvaraCall?
        </Heading>
        <p className="mt-5 max-w-3xl text-lg text-body">{answers.useCases}</p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((card, i) => (
            <Reveal
              key={card.title}
              as="li"
              delayMs={(i % 4) * 70}
              className="rounded-card bg-canvas-soft p-6"
            >
              <h3 className="text-base font-bold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm text-body">{card.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

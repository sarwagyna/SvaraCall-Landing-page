import Reveal from "./Reveal";
import { steps, answers } from "@/lib/content";

export default function HowItWorks({
  headingLevel = 2,
}: {
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <section id="how-it-works" className="bg-[#0b1110]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Heading className="display display-h2 max-w-3xl">
          How does SvaraCall work?
        </Heading>
        <p className="mt-5 max-w-3xl text-lg text-body">{answers.howItWorks}</p>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              key={step.n}
              as="li"
              delayMs={i * 80}
              className="rounded-card border border-white/10 bg-[#121b18] p-7"
            >
              <span
                aria-hidden="true"
                className="tabular grid h-10 w-10 place-items-center rounded-pill bg-primary text-on-primary font-bold"
              >
                {step.n}
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-body">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

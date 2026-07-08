import Reveal from "./Reveal";
import { whyUs, answers } from "@/lib/content";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#0b1110] text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow text-primary">Why SvaraCall</p>
          <h2 className="display mt-4 text-5xl leading-[0.95] text-white md:text-6xl">
            Why
            <br />
            SvaraCall.
          </h2>
          <p className="mt-6 max-w-sm text-lg font-semibold text-white/70">
            We build revenue outcomes, not conversational toys.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
            {answers.whyUs}
          </p>
        </div>

        <ol className="flex flex-col">
          {whyUs.map((card, i) => (
            <Reveal
              key={card.title}
              as="li"
              delayMs={i * 80}
              className="relative flex gap-5 border-t border-white/10 py-7 first:border-t-0 md:gap-7 md:py-8"
            >
              <span
                aria-hidden="true"
                className="display pointer-events-none select-none text-5xl font-[900] leading-none text-white/10 md:text-6xl"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1">
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-2 max-w-lg text-white/55">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { problems } from "@/lib/content";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export default function Problem() {
  return (
    <section id="problem" className="bg-[#0b1110] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <HeroHighlight>
          <Reveal>
            <h2 className="display display-h2 max-w-3xl text-white">
              Follow-ups die because{" "}
              <Highlight className="text-primary">
                nobody has time to call.
              </Highlight>
            </h2>
          </Reveal>
        </HeroHighlight>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {problems.map((card, i) => (
            <Reveal
              key={card.title}
              delayMs={i * 80}
              className="rounded-card bg-white/5 p-7 ring-1 ring-white/10"
            >
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
              <p className="mt-3 text-white/60">{card.body}</p>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xl font-semibold text-primary md:text-2xl">
          More calling staff doesn&apos;t fix this. Software that speaks does.
        </p>
      </div>
    </section>
  );
}

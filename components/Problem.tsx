import Reveal from "./Reveal";
import { problems } from "@/lib/content";

export default function Problem() {
  return (
    <section id="problem" className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="display display-h2 max-w-3xl">
          Follow-ups die because nobody has time to call.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {problems.map((card, i) => (
            <Reveal
              key={card.title}
              delayMs={i * 80}
              className="rounded-card bg-canvas-soft p-7"
            >
              <h3 className="text-xl font-bold text-ink">{card.title}</h3>
              <p className="mt-3 text-body">{card.body}</p>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-xl font-semibold text-ink">
          More calling staff doesn&apos;t fix this. Software that speaks does.
        </p>
      </div>
    </section>
  );
}

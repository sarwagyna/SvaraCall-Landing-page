import Reveal from "./Reveal";
import { impactStats } from "@/lib/content";

// Hide any stat whose value is still an unmeasured placeholder (e.g. "{X}%")
// so the live page never shows template tokens. Fill real pilot numbers in
// `impactStats` to surface them again.
const measuredStats = impactStats.filter((stat) => !stat.value.includes("{"));

export default function Impact() {
  return (
    <section id="impact" className="bg-[#0b1110]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="display display-h2 max-w-3xl">
          The impact on your calling.
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-body">
          We measure these on your pilot, on your own contacts, before you
          commit to anything.
        </p>

        <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {measuredStats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delayMs={(i % 4) * 70}
              className="rounded-card border border-white/10 bg-[#121b18] p-7"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="display text-4xl md:text-5xl text-ink-deep">
                  {stat.value}
                </span>
                <p className="mt-3 text-sm text-body">{stat.label}</p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

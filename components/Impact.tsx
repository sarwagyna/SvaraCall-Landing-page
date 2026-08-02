import RemoteImage from "@/components/RemoteImage";
import Reveal from "./Reveal";
import { impactStats } from "@/lib/content";
import { sceneImages } from "@/lib/images";

// Hide any stat whose value is still an unmeasured placeholder (e.g. "{X}%")
// so the live page never shows template tokens. Fill real pilot numbers in
// `impactStats` to surface them again.
const measuredStats = impactStats.filter((stat) => !stat.value.includes("{"));

export default function Impact() {
  return (
    <section id="impact" className="bg-[#0b1110]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <h2 className="display display-h2 max-w-3xl">
              The impact on your calling.
            </h2>
            <p className="mt-5 max-w-3xl text-lg text-body">
              We measure these on your pilot, on your own contacts, before you
              commit to anything.
            </p>
          </div>
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <RemoteImage
              src={sceneImages.dashboard.src}
              alt={sceneImages.dashboard.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0b1110]/65 via-transparent to-transparent"
              aria-hidden
            />
          </Reveal>
        </div>

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

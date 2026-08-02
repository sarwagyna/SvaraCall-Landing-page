import RemoteImage from "@/components/RemoteImage";
import Reveal from "./Reveal";
import { industries, answers } from "@/lib/content";
import { homeIndustryImages } from "@/lib/images";

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
          {industries.map((card, i) => {
            const photo = homeIndustryImages[card.title];
            return (
              <Reveal
                key={card.title}
                as="li"
                delayMs={(i % 3) * 70}
                className="overflow-hidden rounded-card bg-canvas"
              >
                {photo && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <RemoteImage
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-transparent"
                      aria-hidden
                    />
                  </div>
                )}
                <div className="p-7">
                  <h3 className="text-lg font-bold text-ink">{card.title}</h3>
                  <p className="mt-2 text-body">{card.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

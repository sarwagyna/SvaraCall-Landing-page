import RemoteImage from "@/components/RemoteImage";
import Reveal from "./Reveal";
import { useCases, answers } from "@/lib/content";
import { useCaseImages } from "@/lib/images";

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
          {useCases.map((card, i) => {
            const photo = useCaseImages[card.title];
            return (
              <Reveal
                key={card.title}
                as="li"
                delayMs={(i % 4) * 70}
                className="overflow-hidden rounded-card bg-canvas-soft"
              >
                {photo && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <RemoteImage
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-canvas-soft via-transparent to-transparent"
                      aria-hidden
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-base font-bold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm text-body">{card.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

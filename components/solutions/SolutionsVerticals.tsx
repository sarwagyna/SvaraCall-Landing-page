import RemoteImage from "@/components/RemoteImage";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { verticalBars } from "@/lib/solutions";
import { industryImages } from "@/lib/images";

export default function SolutionsVerticals() {
  return (
    <section
      id="solutions-verticals"
      aria-labelledby="solutions-verticals-heading"
      className="bg-canvas"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16 md:py-24">
        <Reveal>
          <h2 id="solutions-verticals-heading" className="display display-h2 max-w-3xl">
            Use cases across every vertical.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-body sm:mt-5 sm:text-lg">
            The same outbound agent, tuned for how each industry in India
            actually calls — in Telugu, Hindi, and English.
          </p>
        </Reveal>

        <div className="mt-10 flex items-end gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-12 sm:gap-3 md:gap-4 [&::-webkit-scrollbar]:hidden">
          {verticalBars.map((bar, i) => {
            const photo = industryImages[bar.slug];
            return (
              <Reveal
                key={bar.slug}
                delayMs={i * 50}
                className="flex w-[4.25rem] shrink-0 flex-col items-center sm:w-auto sm:min-w-[3.25rem] sm:flex-1"
              >
                <Link
                  href={`/industries/${bar.slug}`}
                  className="group flex w-full flex-col items-center"
                  aria-label={`Explore ${bar.name} solutions`}
                >
                  <span
                    className="vertical-bar relative block h-40 w-full overflow-hidden rounded-t-[18px] rounded-b-[10px] transition-transform duration-500 group-hover:-translate-y-2 sm:h-52 md:h-64"
                    style={{
                      background: `linear-gradient(180deg, ${bar.from} 0%, ${bar.to} 100%)`,
                      animationDelay: `${i * 80}ms`,
                    }}
                  >
                    {photo && (
                      <>
                        <RemoteImage
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="12vw"
                          className="object-cover opacity-55 mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-70"
                        />
                        <span
                          className="absolute inset-0 bg-gradient-to-t from-[#0b1110]/80 via-[#0b1110]/20 to-transparent"
                          aria-hidden
                        />
                      </>
                    )}
                  </span>
                  <span className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-mute [writing-mode:vertical-rl] rotate-180 sm:text-xs">
                    {bar.name}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

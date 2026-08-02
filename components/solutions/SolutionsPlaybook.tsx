import Link from "next/link";
import Reveal from "@/components/Reveal";
import { solutionsPlays } from "@/lib/solutions";

export default function SolutionsPlaybook() {
  return (
    <section
      id="solutions-playbook"
      aria-labelledby="solutions-playbook-heading"
      className="bg-canvas-soft"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16 md:py-24">
        <Reveal>
          <h2 id="solutions-playbook-heading" className="display display-h2 max-w-3xl">
            Know the play before you dial.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-body sm:mt-5 sm:text-lg">
            Proven outbound plays — pick the bottleneck, ship the workflow,
            measure the outcome.
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {solutionsPlays.map((play, i) => (
            <Reveal
              key={play.title}
              as="li"
              delayMs={(i % 3) * 60}
              className="flex h-full flex-col border-t border-line pt-5 sm:pt-6"
            >
              <p className="eyebrow">{play.category}</p>
              <h3 className="mt-2 text-base font-bold text-ink sm:mt-3 sm:text-lg">
                {play.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-body sm:mt-3">
                {play.body}
              </p>
              <Link
                href={play.href}
                className="mt-4 inline-flex text-sm font-semibold text-ink-deep transition-colors hover:text-primary sm:mt-5"
              >
                {play.cta} →
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

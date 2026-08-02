import Reveal from "@/components/Reveal";
import { solutionsProcess } from "@/lib/solutions";

export default function SolutionsProcess() {
  return (
    <section
      id="solutions-process"
      aria-labelledby="solutions-process-heading"
      className="bg-canvas-soft"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16 md:py-24">
        <Reveal>
          <h2 id="solutions-process-heading" className="display display-h2 max-w-3xl">
            From bottleneck to logged outcomes.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-body sm:mt-5 sm:text-lg">
            Strategy, execution, and optimization — so routine calls clear and
            your team stays on the ones that close.
          </p>
        </Reveal>

        <ol className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutionsProcess.map((step, i) => (
            <Reveal
              key={step.label}
              as="li"
              delayMs={i * 80}
              className="rounded-[24px] bg-canvas p-6 ring-1 ring-line sm:rounded-[28px] sm:p-7 md:p-8"
            >
              <p className="eyebrow text-primary">{step.label}</p>
              <h3 className="mt-3 text-lg font-bold text-ink sm:text-xl">
                {step.title}
              </h3>
              <ul className="mt-5 space-y-3 sm:mt-6">
                {step.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-body"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary"
                    >
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

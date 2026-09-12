import Reveal from "./Reveal";
import Link from "next/link";
import { compliance, answers } from "@/lib/content";

export default function Compliance({
  headingLevel = 2,
}: {
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <section id="compliance" className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Heading className="display display-h2 max-w-3xl">
          Is AI outbound calling compliant in India?
        </Heading>
        <p className="mt-5 max-w-3xl text-lg text-body">{answers.compliance}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {compliance.map((card, i) => (
            <Reveal
              key={card.title}
              delayMs={(i % 4) * 70}
              className="rounded-card bg-canvas-soft p-6"
            >
              <span className="inline-flex rounded-pill bg-primary px-3 py-1 text-xs font-semibold text-on-primary">
                {card.title}
              </span>
              <p className="mt-3 text-sm text-body">{card.body}</p>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm text-body">
          Formal terms:{" "}
          <Link href="/terms" className="text-ink-deep hover:underline">
            Terms of Service
          </Link>
          ,{" "}
          <Link href="/privacy" className="text-ink-deep hover:underline">
            Privacy Policy
          </Link>
          , and{" "}
          <Link href="/dpa" className="text-ink-deep hover:underline">
            Data Processing Addendum
          </Link>
          . Telephony compliance terms and our subprocessor list are available
          on request.
        </p>
      </div>
    </section>
  );
}

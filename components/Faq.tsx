import Reveal from "./Reveal";
import { faqs } from "@/lib/content";

export default function Faq({ headingLevel = 2 }: { headingLevel?: 1 | 2 }) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <section id="faq" className="bg-canvas-soft">
      <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <Heading className="display display-h2">
          Questions about SvaraCall AI
        </Heading>

        <dl className="mt-10 space-y-8">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delayMs={(i % 2) * 70}>
              <dt className="text-lg font-bold text-ink">{faq.q}</dt>
              <dd className="mt-2 text-body">{faq.a}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

import Link from "next/link";
import Reveal from "./Reveal";

const cards = [
  {
    href: "/how-it-works",
    title: "How it works",
    body: "Four steps from a contact list to logged calls on one dashboard.",
  },
  {
    href: "/voice-agents",
    title: "Voice agents",
    body: "Inbound, outbound, and custom voice agents — hear them speak.",
  },
  {
    href: "/use-cases",
    title: "Use cases",
    body: "Lead follow-ups, reminders, confirmations, feedback, and win-backs.",
  },
  {
    href: "/industries",
    title: "Industries",
    body: "Healthcare, fintech, real estate, education, e-commerce, and more.",
  },
  {
    href: "/compliance",
    title: "Compliance",
    body: "TRAI and DLT-registered, consent-first, DPDP-aligned, data in India.",
  },
  {
    href: "/faq",
    title: "FAQ",
    body: "Straight answers on languages, compliance, and integrations.",
  },
];

export default function Explore() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="display display-h2 max-w-3xl">Explore SvaraCall AI.</h2>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.href} as="li" delayMs={(i % 3) * 70}>
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-card bg-canvas-soft p-7 transition-colors hover:bg-primary-pale"
              >
                <h3 className="text-lg font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-body">{card.body}</p>
                <span className="mt-4 text-sm font-semibold text-ink-deep">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

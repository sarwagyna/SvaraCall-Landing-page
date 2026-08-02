import RemoteImage from "@/components/RemoteImage";
import Link from "next/link";
import Reveal from "./Reveal";
import { sceneImages, industryImages } from "@/lib/images";

const cards = [
  {
    href: "/solutions",
    title: "Solutions",
    body: "Find the outbound workflow that clears your calling bottleneck.",
    image: sceneImages.dashboard,
  },
  {
    href: "/how-it-works",
    title: "How it works",
    body: "Four steps from a contact list to logged calls on one dashboard.",
    image: sceneImages.callingDesk,
  },
  {
    href: "/integrations",
    title: "Integrations",
    body: "CRM, WhatsApp, telephony, automation — connect the tools you already use.",
    image: industryImages.fintech,
  },
  {
    href: "/voice-agents",
    title: "Voice agents",
    body: "Inbound, outbound, and custom voice agents — hear them speak.",
    image: sceneImages.conversation,
  },
  {
    href: "/use-cases",
    title: "Use cases",
    body: "Lead follow-ups, reminders, confirmations, feedback, and win-backs.",
    image: industryImages.ecommerce,
  },
  {
    href: "/industries",
    title: "Industries",
    body: "Healthcare, fintech, real estate, education, e-commerce, telecom & IT, and more.",
    image: industryImages.healthcare,
  },
  {
    href: "/compliance",
    title: "Compliance",
    body: "TRAI and DLT-registered, consent-first, DPDP-aligned, data in India.",
    image: industryImages.insurance,
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
                className="group flex h-full flex-col overflow-hidden rounded-card bg-canvas-soft transition-colors hover:bg-primary-pale"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <RemoteImage
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-canvas-soft via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-lg font-bold text-ink">{card.title}</h3>
                  <p className="mt-2 text-body">{card.body}</p>
                  <span className="mt-4 text-sm font-semibold text-ink-deep">
                    Learn more →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

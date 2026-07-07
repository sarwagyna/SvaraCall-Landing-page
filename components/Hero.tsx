import Link from "next/link";
import LiveCallDemo from "./LiveCallDemo";
import Marquee from "./Marquee";
import { useCases } from "@/lib/content";
import { bookPilotHref } from "@/lib/nav";

const trustChips = [
  "A fraction of a calling team's cost",
  "Outcome-driven pricing",
  "Telugu · Hindi · English",
  "TRAI · DLT ready",
  "No new hardware",
];

export default function Hero() {
  return (
    <section id="top" className="bg-canvas-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Outbound voice AI for Indian businesses</p>
          <h1 className="display display-hero mt-4">
            Missed calls are missed customers.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-body">
            SvaraCall AI is an AI voice agent that makes a business&apos;s
            outbound calls — lead follow-ups, appointment reminders, payment
            reminders — in Telugu, Hindi, and English, and logs every outcome
            automatically. Premium, human-grade calling at a fraction of a
            calling team&apos;s cost.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={bookPilotHref}
              className="inline-flex h-12 items-center rounded-pill bg-primary px-7 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
            >
              Book a pilot
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex h-12 items-center rounded-pill border border-ink px-7 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              See how it works
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {trustChips.map((chip) => (
              <li
                key={chip}
                className="rounded-pill bg-canvas px-4 py-2 text-sm font-semibold text-ink shadow-sm"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-4">
          <LiveCallDemo />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-14">
        <Marquee
          label="Calls SvaraCall automates"
          items={useCases.map((u) => u.title)}
        />
      </div>
    </section>
  );
}

import RemoteImage from "@/components/RemoteImage";
import Link from "next/link";
import Reveal from "./Reveal";
import { bookPilotHref } from "@/lib/nav";
import { sceneImages } from "@/lib/images";

const processSteps = [
  {
    n: "01",
    title: "Share your list",
    body: "Upload contacts or connect your sheet/CRM. No new hardware.",
  },
  {
    n: "02",
    title: "We configure your agent",
    body: "Script, language mix, and escalation rules set up for your business.",
  },
  {
    n: "03",
    title: "SvaraCall calls",
    body: "On your schedule, with the same disclosure and quality on every call.",
  },
  {
    n: "04",
    title: "You see every outcome",
    body: "Recording, transcript, and result logged on one dashboard; complex calls escalate to your team.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-cv bg-[#0b1110] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow text-primary">Our process</p>
        <h2 className="display display-h2 mt-4 max-w-3xl text-white">
          From list to logged calls in four steps.
        </h2>

        <Reveal className="relative mt-10 aspect-[21/9] overflow-hidden rounded-[28px]">
          <RemoteImage
            src={sceneImages.callingDesk.src}
            alt={sceneImages.callingDesk.alt}
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#0b1110]/75 via-[#0b1110]/35 to-transparent"
            aria-hidden
          />
        </Reveal>

        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.n}
              as="li"
              delayMs={i * 80}
              className="rounded-card bg-white/5 p-7 ring-1 ring-white/10"
            >
              <span
                aria-hidden="true"
                className="tabular grid h-10 w-10 place-items-center rounded-pill bg-primary text-on-primary text-sm font-bold"
              >
                {step.n}
              </span>
              <p className="mt-4 text-lg font-bold text-white">{step.title}</p>
              <p className="mt-2 text-white/60">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-10">
          <Link
            href={bookPilotHref}
            className="inline-flex h-12 items-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
          >
            Start your four-step pilot →
          </Link>
        </div>
      </div>
    </section>
  );
}

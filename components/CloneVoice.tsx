import RemoteImage from "@/components/RemoteImage";
import Link from "next/link";
import { bookPilotHref } from "@/lib/nav";
import { sceneImages } from "@/lib/images";

const steps = [
  {
    title: "Record a short sample",
    body: "Provide a few minutes of consent-based speech from the voice you want to clone.",
  },
  {
    title: "We build your voice",
    body: "Our team trains a custom voice that matches your tone in Telugu, Hindi, and English.",
  },
  {
    title: "Deploy everywhere",
    body: "Use your cloned voice across every SvaraCall workflow — reminders, follow-ups, and more.",
  },
];

function PremiumBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-pill bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-on-primary">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="m12 2 2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 7.1-1.01L12 2z" />
      </svg>
      Premium
    </span>
  );
}

export default function CloneVoice() {
  return (
    <section id="clone-voice" className="bg-[#0b1110] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <PremiumBadge />
            <h2 className="display display-h2 mt-5 text-white">
              Clone your own voice.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              Want an agent that sounds like your brand, not a stock voice? With
              our premium voice cloning, SvaraCall recreates a chosen voice —
              built from a short, consent-based recording — and speaks it in
              Telugu, Hindi, and English across all your calls.
            </p>
            <div className="mt-8">
              <Link
                href={bookPilotHref}
                className="inline-flex h-12 items-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
              >
                Request voice cloning
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/50">
              Voice cloning uses consent-based recordings only, in line with the
              DPDP Act.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card">
              <RemoteImage
                src={sceneImages.conversation.src}
                alt={sceneImages.conversation.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0b1110]/70 via-transparent to-transparent"
                aria-hidden
              />
            </div>
            <ol className="flex flex-col gap-4">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-card bg-white/5 p-6 ring-1 ring-white/10"
                >
                  <span
                    aria-hidden="true"
                    className="tabular grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-primary text-on-primary font-bold"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-1.5 text-white/60">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

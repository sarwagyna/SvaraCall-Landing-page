import Link from "next/link";
import { bookPilotHref } from "@/lib/nav";

export default function CtaBand() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="rounded-card bg-ink px-6 py-14 text-center md:px-12">
          <h2 className="display display-h2 text-white">
            <span className="text-primary">Hear it call.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            We&apos;ll place a live SvaraCall to your own phone, in Telugu,
            Hindi, or English.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href={bookPilotHref}
              className="inline-flex h-12 items-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
            >
              Book a pilot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

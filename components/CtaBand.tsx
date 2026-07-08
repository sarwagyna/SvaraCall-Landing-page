import Link from "next/link";
import SoftAuroraLazy from "./SoftAuroraLazy";
import FinalCtaActions from "./FinalCtaActions";
import { bookPilotHref } from "@/lib/nav";

export default function CtaBand() {
  return (
    <section id="final-cta" className="bg-[#0b1110]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-card bg-[#0b1110] ring-1 ring-white/10">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <SoftAuroraLazy
              speed={0.45}
              scale={1.6}
              brightness={0.7}
              color1="#163300"
              color2="#9fe870"
              noiseFrequency={2.0}
              bandHeight={0.35}
              bandSpread={1.1}
              enableMouseInteraction={false}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b1110]/95 via-[#0f1815]/92 to-[#15301b]/80"
            aria-hidden
          />

          <div className="relative z-10 grid items-center gap-10 px-6 py-12 md:px-12 md:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-14">
            <div className="text-center lg:text-left">
              <h2 className="display display-h2 text-white">
                <span className="text-primary">Hear it call.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-lg text-white/75 lg:mx-0">
                We&apos;ll place a live SvaraCall to your own phone, in Telugu,
                Hindi, or English.
              </p>
              <Link
                href={bookPilotHref}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
              >
                Book a pilot
              </Link>
            </div>

            <FinalCtaActions />
          </div>
        </div>
      </div>
    </section>
  );
}

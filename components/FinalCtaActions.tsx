import DemoCallFormLazy from "./DemoCallFormLazy";
import { site } from "@/lib/content";

export default function FinalCtaActions() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-card bg-[#0f1815]/80 px-4 pt-3 pb-4 ring-1 ring-white/10 backdrop-blur-sm md:px-5 md:pt-4 md:pb-5 lg:mx-0">
      <p className="mb-2.5 text-sm font-semibold text-white">Get a demo call</p>
      <DemoCallFormLazy
        variant="stacked"
        theme="dark"
        size="compact"
        inputId="final-demo-phone"
        submitEvent="final_cta_demo_call_submitted"
      />
      <p className="mt-3 text-center text-xs text-white/55 lg:text-left">
        For pricing and a demo, please contact{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-semibold text-white/80 transition-colors hover:text-primary"
        >
          {site.email}
        </a>
      </p>
    </div>
  );
}

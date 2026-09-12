import DemoCallFormLazy from "./DemoCallFormLazy";
import { site } from "@/lib/content";

export default function HeroActions() {
  return (
    <div className="mx-auto mt-8 w-full max-w-xl md:mt-10">
      <div className="mx-auto w-fit max-w-full">
        <div className="overflow-hidden rounded-card bg-canvas p-2 shadow-sm ring-1 ring-ink/10 md:p-2.5">
          <DemoCallFormLazy
            variant="inline"
            theme="light"
            inputId="hero-demo-phone"
            submitEvent="hero_demo_call_submitted"
            size="compact"
          />
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-white/60">
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

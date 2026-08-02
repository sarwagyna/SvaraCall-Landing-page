import DemoCallFormLazy from "./DemoCallFormLazy";

export default function FinalCtaActions() {
  return (
    <div className="rounded-card bg-[#0f1815]/80 px-6 pt-4 pb-6 ring-1 ring-white/10 backdrop-blur-sm md:px-7 md:pt-5 md:pb-7">
      <p className="mb-3 text-sm font-semibold text-white">Get a demo call</p>
      <DemoCallFormLazy
        variant="stacked"
        theme="dark"
        inputId="final-demo-phone"
        submitEvent="final_cta_demo_call_submitted"
      />
    </div>
  );
}

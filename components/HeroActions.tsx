import DemoCallFormLazy from "./DemoCallFormLazy";

export default function HeroActions() {
  return (
    <div className="mx-auto mt-10 w-full max-w-xl md:mt-12">
      <div className="overflow-hidden rounded-card bg-canvas p-3 shadow-sm ring-1 ring-ink/10 md:p-4">
        <DemoCallFormLazy
          variant="inline"
          theme="light"
          inputId="hero-demo-phone"
          submitEvent="hero_demo_call_submitted"
          size="compact"
        />
      </div>
    </div>
  );
}

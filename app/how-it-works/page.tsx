import Breadcrumbs from "@/components/Breadcrumbs";
import HowItWorks from "@/components/HowItWorks";
import Dashboard from "@/components/Dashboard";
import PilotTuning from "@/components/PilotTuning";
import Impact from "@/components/Impact";
import CtaBand from "@/components/CtaBand";
import { steps } from "@/lib/content";
import { pageMetadata } from "@/lib/seoMeta";
import { breadcrumbList, howToSchema, jsonLdGraph } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "How SvaraCall Works — AI Outbound Calls in Four Steps",
  description:
    "How SvaraCall AI works: upload a list or connect your CRM, it dials from your number, speaks in Telugu, Hindi & English, and logs every call on one dashboard — premium calling at a fraction of a calling team's cost.",
  path: "/how-it-works",
});

const trail = [{ name: "How it works", path: "/how-it-works" }];

const graph = jsonLdGraph([
  breadcrumbList(trail),
  howToSchema({
    name: "How SvaraCall Works — AI Outbound Calls in Four Steps",
    description:
      "How SvaraCall AI works: upload a list or connect your CRM, it dials from your number, speaks in Telugu, Hindi & English, and logs every call on one dashboard.",
    steps: steps.map((step) => ({ name: step.title, text: step.body })),
    options: { graphNode: true },
  }),
]);

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <HowItWorks headingLevel={1} />
        <Dashboard />
        <PilotTuning />
        <Impact />
        <CtaBand />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graph),
        }}
      />
    </>
  );
}

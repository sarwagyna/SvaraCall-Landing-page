import Breadcrumbs from "@/components/Breadcrumbs";
import VoiceAgents from "@/components/VoiceAgents";
import VoiceLibrary from "@/components/VoiceLibrary";
import VoiceRoster from "@/components/VoiceRoster";
import CloneVoice from "@/components/CloneVoice";
import CtaBand from "@/components/CtaBand";
import { site, voiceAgents } from "@/lib/content";
import { pageMetadata } from "@/lib/seoMeta";
import { breadcrumbList, jsonLdGraph, softwareApplicationSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "AI Voice Agents — Inbound, Outbound & Custom",
  description:
    "SvaraCall AI voice agents for every calling job — inbound answering, outbound campaigns, and custom voice logic — speaking Telugu, Hindi, and English, at a fraction of a calling team's cost.",
  path: "/voice-agents",
});

const trail = [{ name: "Voice agents", path: "/voice-agents" }];

const graph = jsonLdGraph([
  breadcrumbList(trail),
  softwareApplicationSchema({
    name: "SvaraCall AI Voice Agents",
    description:
      "SvaraCall AI voice agents for every calling job — inbound answering, outbound campaigns, and custom voice logic — speaking Telugu, Hindi, and English.",
    url: `${site.url}/voice-agents`,
    featureList: voiceAgents.map((agent) => agent.title),
    options: { graphNode: true },
  }),
]);

export default function VoiceAgentsPage() {
  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <VoiceAgents headingLevel={1} />
        <VoiceLibrary />
        <VoiceRoster />
        <CloneVoice />
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

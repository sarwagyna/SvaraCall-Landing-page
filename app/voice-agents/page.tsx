import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import VoiceAgents from "@/components/VoiceAgents";
import VoiceLibrary from "@/components/VoiceLibrary";
import VoiceRoster from "@/components/VoiceRoster";
import CloneVoice from "@/components/CloneVoice";
import CtaBand from "@/components/CtaBand";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Voice Agents — Inbound, Outbound & Custom",
  description:
    "SvaraCall AI voice agents for every calling job — inbound answering, outbound campaigns, and custom voice logic — speaking Telugu, Hindi, and English, at a fraction of a calling team's cost.",
  alternates: { canonical: "/voice-agents" },
};

const trail = [{ name: "Voice agents", path: "/voice-agents" }];

export default function VoiceAgentsPage() {
  return (
    <>
      <Breadcrumbs trail={trail} />
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
          __html: JSON.stringify(breadcrumbList(trail)),
        }}
      />
    </>
  );
}

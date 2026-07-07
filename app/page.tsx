import Hero from "@/components/Hero";
import DemoCall from "@/components/DemoCall";
import Problem from "@/components/Problem";
import Comparison from "@/components/Comparison";
import WhyUs from "@/components/WhyUs";
import Explore from "@/components/Explore";
import RevenueImpactAssessmentLazy from "@/components/RevenueImpactAssessmentLazy";
import CtaBand from "@/components/CtaBand";
import { site, canonicalSentence, useCases } from "@/lib/content";
import { breadcrumbList } from "@/lib/schema";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${site.url}/#software`,
      name: site.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: `${canonicalSentence} It is an AI voice agent that makes a business's outbound calls — lead follow-ups, reminders, and confirmations — in Telugu, Hindi, and English, and logs every outcome automatically.`,
      url: site.url,
      inLanguage: ["te", "hi", "en"],
      provider: { "@id": `${site.url}/#organization` },
      featureList: useCases.map((u) => u.title),
      audience: {
        "@type": "Audience",
        audienceType:
          "Businesses in India across healthcare, real estate, education, finance, retail, and services",
      },
      dateModified: site.dateModified,
    },
    breadcrumbList([{ name: "SvaraCall AI", path: "/" }]),
  ],
};

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <DemoCall />
        <Problem />
        <Comparison />
        <Explore />
        <WhyUs />
        <RevenueImpactAssessmentLazy />
        <CtaBand />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
}

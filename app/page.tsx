import type { Metadata } from "next";
import nextDynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import Outcomes from "@/components/Outcomes";
import WhyUs from "@/components/WhyUs";
import CtaBand from "@/components/CtaBand";
import LazyMount from "@/components/LazyMount";
import LaunchPageView, {
  getLaunchPageMetadata,
} from "@/components/LaunchPageView";
import { site, canonicalSentence, useCases } from "@/lib/content";
import { homeFaqs } from "@/lib/homeFaq";
import { isLaunchAsHomepage } from "@/lib/launch";
import { breadcrumbList, faqPageSchema } from "@/lib/schema";

// Revalidate often enough to swap back to the marketing homepage
// at 12:15 pm IST on 14 September 2026 without a redeploy.
export const revalidate = 60;

const RoiCalculator = nextDynamic(() => import("@/components/RoiCalculator"), {
  loading: () => (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24" aria-hidden>
      <div className="h-96 animate-pulse rounded-card bg-canvas-soft" />
    </div>
  ),
});
const HomeFaq = nextDynamic(() => import("@/components/HomeFaq"));
const StickyMobileCta = nextDynamic(
  () => import("@/components/StickyMobileCtaLazy"),
);

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
    faqPageSchema(
      homeFaqs.map((item) => ({
        question: item.question,
        answer: item.answer,
      })),
      { graphNode: true },
    ),
  ],
};

export function generateMetadata(): Metadata {
  if (isLaunchAsHomepage()) {
    return getLaunchPageMetadata("/");
  }
  return {};
}

function MarketingHome() {
  return (
    <>
      <main className="pb-20 md:pb-0">
        <Hero />
        <Problem />
        <Solutions />
        <Process />
        <Outcomes />
        <WhyUs />
        <LazyMount minHeight={420}>
          <RoiCalculator />
        </LazyMount>
        <LazyMount minHeight={480}>
          <HomeFaq />
        </LazyMount>
        <CtaBand />
      </main>
      <StickyMobileCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
}

export default function Home() {
  if (isLaunchAsHomepage()) {
    return <LaunchPageView path="/" />;
  }
  return <MarketingHome />;
}

import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import SolutionsCatalog from "@/components/solutions/SolutionsCatalog";
import SolutionsProcess from "@/components/solutions/SolutionsProcess";
import SolutionsVerticals from "@/components/solutions/SolutionsVerticals";
import SolutionsPlaybook from "@/components/solutions/SolutionsPlaybook";
import SolutionsChat from "@/components/solutions/SolutionsChat";
import { SolutionsChatProvider } from "@/components/solutions/SolutionsChatContext";
import { breadcrumbList } from "@/lib/schema";
import { allSolutionCards } from "@/lib/solutions";
import { site } from "@/lib/content";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
  title: "Solutions — AI Outbound Calling Workflows",
  description:
    "Explore SvaraCall AI solutions for lead follow-up, appointment reminders, no-show recovery, payment nudges, order confirmations, and more — in Telugu, Hindi, and English. Chat with our trained assistant to map your bottleneck.",
  path: "/solutions",
});

const trail = [{ name: "Solutions", path: "/solutions" }];

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList(trail),
    {
      "@type": "CollectionPage",
      "@id": `${site.url}/solutions#page`,
      name: "SvaraCall AI Solutions",
      description:
        "AI outbound calling workflows that eliminate routine calling bottlenecks for Indian businesses.",
      url: `${site.url}/solutions`,
      isPartOf: { "@id": `${site.url}/#website` },
      hasPart: allSolutionCards.map((card) => ({
        "@type": "Service",
        name: card.title,
        description: card.body,
        url: `${site.url}${card.href ?? "/solutions"}`,
        provider: { "@id": `${site.url}/#organization` },
      })),
    },
  ],
};

export default function SolutionsPage() {
  return (
    <SolutionsChatProvider>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <SolutionsCatalog />
        <SolutionsProcess />
        <SolutionsVerticals />
        <SolutionsPlaybook />
        <CtaBand />
      </main>
      <SolutionsChat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </SolutionsChatProvider>
  );
}

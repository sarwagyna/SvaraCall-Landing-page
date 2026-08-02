import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { site, faqs } from "@/lib/content";
import { pageMetadata } from "@/lib/seoMeta";
import { breadcrumbList } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "FAQ — Cost, Languages, Compliance & Integrations",
  description:
    "Answers about SvaraCall AI: what it is and what it costs, how AI outbound calls work, languages, TRAI and DPDP compliance, human handoff, and CRM integration. Premium calling at a fraction of a calling team's cost.",
  path: "/faq",
});

const trail = [{ name: "FAQ", path: "/faq" }];

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${site.url}/faq#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    breadcrumbList(trail),
  ],
};

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs trail={trail} />
      <main>
        <Faq headingLevel={1} />
        <CtaBand />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
}

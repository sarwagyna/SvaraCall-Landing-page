import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import IntegrationsCatalog from "@/components/integrations/IntegrationsCatalog";
import { breadcrumbList } from "@/lib/schema";
import { integrationStats, integrations } from "@/lib/integrations";
import { site } from "@/lib/content";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
  title: "Integrations — CRM, WhatsApp, Telephony & More",
  description:
    "Connect SvaraCall AI to the tools you already use — CRM, automation, e-commerce, WhatsApp, SMS, telephony, and more. Your stack stays yours.",
  path: "/integrations",
});

const trail = [{ name: "Integrations", path: "/integrations" }];

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList(trail),
    {
      "@type": "CollectionPage",
      "@id": `${site.url}/integrations#page`,
      name: "SvaraCall AI Integrations",
      description:
        "Catalog of CRM, automation, telephony, WhatsApp, and other tools that connect to SvaraCall AI voice agents.",
      url: `${site.url}/integrations`,
      isPartOf: { "@id": `${site.url}/#website` },
      numberOfItems: integrationStats.total,
      hasPart: integrations.slice(0, 24).map((item) => ({
        "@type": "SoftwareApplication",
        name: item.name,
        description: item.description,
        applicationCategory: item.category,
      })),
    },
  ],
};

export default function IntegrationsPage() {
  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <IntegrationsCatalog />
        <CtaBand />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
}

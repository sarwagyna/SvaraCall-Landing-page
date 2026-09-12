import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import IntegrationsCatalog from "@/components/integrations/IntegrationsCatalog";
import { breadcrumbList } from "@/lib/schema";
import { integrationStats, integrations } from "@/lib/integrations";
import { site } from "@/lib/content";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
  title: "Integrations — Connect Any Tools You Already Use",
  description:
    "SvaraCall AI integrates with the tools you already run — CRM, WhatsApp, telephony, sheets, and anything with an API. The catalog is a start; custom connections are standard.",
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
        "SvaraCall AI connects to the tools a business already uses — listed integrations plus custom API bridges.",
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

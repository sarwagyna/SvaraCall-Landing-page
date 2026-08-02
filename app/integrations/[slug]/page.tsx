import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoProgrammaticPageView from "@/components/seo/SeoProgrammaticPageView";
import { site } from "@/lib/content";
import { getIntegrationPage, integrationPages } from "@/lib/integrationPages";
import {
  breadcrumbList,
  faqPageSchema,
  jsonLdGraph,
  softwareApplicationSchema,
} from "@/lib/schema";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return integrationPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getIntegrationPage(slug);
  if (!data) return {};

  const url = `${site.url}/integrations/${slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/integrations/${slug}` },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: site.name,
      title: data.metaTitle,
      description: data.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

export default async function IntegrationSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getIntegrationPage(slug);
  if (!data) notFound();

  const trail = [
    { name: "Integrations", path: "/integrations" },
    { name: data.name, path: `/integrations/${slug}` },
  ];
  const breadcrumb = breadcrumbList(trail);
  const url = `${site.url}/integrations/${slug}`;

  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <SeoProgrammaticPageView
          page={data}
          hubHref="/integrations"
          hubLabel="All integrations"
        />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdGraph([
              breadcrumb,
              softwareApplicationSchema({
                name: `${data.name} Integration — SvaraCall`,
                description: data.metaDescription,
                url,
                options: { graphNode: true },
              }),
              faqPageSchema(
                data.faqs.map((item) => ({
                  question: item.q,
                  answer: item.a,
                })),
                { graphNode: true },
              ),
            ]),
          ),
        }}
      />
    </>
  );
}

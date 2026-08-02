import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoProgrammaticPageView from "@/components/seo/SeoProgrammaticPageView";
import { site } from "@/lib/content";
import { getFeaturePage, featurePages } from "@/lib/featurePages";
import {
  breadcrumbList,
  faqPageSchema,
  jsonLdGraph,
  softwareApplicationSchema,
} from "@/lib/schema";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return featurePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getFeaturePage(slug);
  if (!data) return {};

  const url = `${site.url}/features/${slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/features/${slug}` },
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

export default async function FeatureSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getFeaturePage(slug);
  if (!data) notFound();

  const trail = [
    { name: "Features", path: "/features" },
    { name: data.name, path: `/features/${slug}` },
  ];
  const breadcrumb = breadcrumbList(trail);
  const url = `${site.url}/features/${slug}`;
  const featureList =
    data.benefits?.map((b) => b.title) ?? data.chips ?? [];

  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <SeoProgrammaticPageView
          page={data}
          hubHref="/features"
          hubLabel="All features"
        />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdGraph([
              breadcrumb,
              softwareApplicationSchema({
                name: data.name,
                description: data.metaDescription,
                url,
                featureList,
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

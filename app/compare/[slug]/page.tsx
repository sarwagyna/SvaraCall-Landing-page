import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoProgrammaticPageView from "@/components/seo/SeoProgrammaticPageView";
import { site } from "@/lib/content";
import { getComparePage, comparePages } from "@/lib/comparePages";
import {
  articleSchema,
  breadcrumbList,
  faqPageSchema,
  jsonLdGraph,
} from "@/lib/schema";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return comparePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getComparePage(slug);
  if (!data) return {};

  const url = `${site.url}/compare/${slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/compare/${slug}` },
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

export default async function CompareSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getComparePage(slug);
  if (!data) notFound();

  const trail = [
    { name: "Compare", path: "/compare" },
    { name: data.name, path: `/compare/${slug}` },
  ];
  const breadcrumb = breadcrumbList(trail);
  const url = `${site.url}/compare/${slug}`;

  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <SeoProgrammaticPageView
          page={data}
          hubHref="/compare"
          hubLabel="All comparisons"
        />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdGraph([
              breadcrumb,
              articleSchema({
                name: data.name,
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

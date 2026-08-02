import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoProgrammaticPageView from "@/components/seo/SeoProgrammaticPageView";
import { site } from "@/lib/content";
import { getSolutionPage, solutionPages } from "@/lib/integrationPages";
import {
  breadcrumbList,
  faqPageSchema,
  jsonLdGraph,
  serviceSchema,
} from "@/lib/schema";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return solutionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getSolutionPage(slug);
  if (!data) return {};

  const url = `${site.url}/solutions/${slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/solutions/${slug}` },
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

export default async function SolutionSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getSolutionPage(slug);
  if (!data) notFound();

  const trail = [
    { name: "Solutions", path: "/solutions" },
    { name: data.name, path: `/solutions/${slug}` },
  ];
  const breadcrumb = breadcrumbList(trail);
  const url = `${site.url}/solutions/${slug}`;

  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <SeoProgrammaticPageView
          page={data}
          hubHref="/solutions"
          hubLabel="All solutions"
        />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdGraph([
              breadcrumb,
              serviceSchema({
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

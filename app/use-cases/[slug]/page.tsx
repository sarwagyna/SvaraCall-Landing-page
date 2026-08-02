import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoProgrammaticPageView from "@/components/seo/SeoProgrammaticPageView";
import { site } from "@/lib/content";
import { getUseCasePage, useCasePages } from "@/lib/useCasePages";
import {
  breadcrumbList,
  faqPageSchema,
  howToSchema,
  serviceSchema,
} from "@/lib/schema";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return useCasePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getUseCasePage(slug);
  if (!data) return {};

  const url = `${site.url}/use-cases/${slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/use-cases/${slug}` },
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

export default async function UseCaseSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getUseCasePage(slug);
  if (!data) notFound();

  const trail = [
    { name: "Use cases", path: "/use-cases" },
    { name: data.name, path: `/use-cases/${slug}` },
  ];
  const url = `${site.url}/use-cases/${slug}`;

  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <SeoProgrammaticPageView
          page={data}
          hubHref="/use-cases"
          hubLabel="All use cases"
        />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              breadcrumbList(trail),
              faqPageSchema(
                data.faqs.map((item) => ({
                  question: item.q,
                  answer: item.a,
                })),
                { graphNode: true },
              ),
              serviceSchema({
                name: `${data.name} — SvaraCall AI`,
                description: data.metaDescription,
                url,
                options: { graphNode: true },
              }),
              howToSchema({
                name: `Implement ${data.name} with SvaraCall`,
                description: data.subcopy,
                steps: data.implementation.map((step) => ({
                  name: step.title,
                  text: step.body,
                })),
                options: { graphNode: true },
              }),
            ],
          }),
        }}
      />
    </>
  );
}

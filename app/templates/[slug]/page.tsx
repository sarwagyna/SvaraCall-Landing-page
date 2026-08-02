import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoProgrammaticPageView from "@/components/seo/SeoProgrammaticPageView";
import { site } from "@/lib/content";
import { getTemplatePage, templatePages } from "@/lib/templatePages";
import {
  breadcrumbList,
  faqPageSchema,
  howToSchema,
} from "@/lib/schema";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return templatePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getTemplatePage(slug);
  if (!data) return {};

  const url = `${site.url}/templates/${slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/templates/${slug}` },
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

export default async function TemplateSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getTemplatePage(slug);
  if (!data) notFound();

  const trail = [
    { name: "Templates", path: "/templates" },
    { name: data.name, path: `/templates/${slug}` },
  ];

  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <SeoProgrammaticPageView
          page={data}
          hubHref="/templates"
          hubLabel="All templates"
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
              howToSchema({
                name: data.name,
                description: data.metaDescription,
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

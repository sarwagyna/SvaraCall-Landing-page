import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoProgrammaticPageView from "@/components/seo/SeoProgrammaticPageView";
import { site } from "@/lib/content";
import { getNichePage, nichePages } from "@/lib/nichePages";
import {
  breadcrumbList,
  faqPageSchema,
  serviceSchema,
} from "@/lib/schema";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return nichePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getNichePage(slug);
  if (!data) return {};

  const url = `${site.url}/for/${slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/for/${slug}` },
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

export default async function NichePage({ params }: PageProps) {
  const { slug } = await params;
  const data = getNichePage(slug);
  if (!data) notFound();

  const trail = [
    { name: "For your business", path: "/for" },
    { name: data.name, path: `/for/${slug}` },
  ];
  const url = `${site.url}/for/${slug}`;

  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <SeoProgrammaticPageView
          page={data}
          hubHref="/for"
          hubLabel="All niches"
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
                name: `AI Voice Agent for ${data.name} — SvaraCall`,
                description: data.metaDescription,
                url,
                options: { graphNode: true },
              }),
            ],
          }),
        }}
      />
    </>
  );
}

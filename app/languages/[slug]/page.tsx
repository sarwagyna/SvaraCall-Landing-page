import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import LanguageVertical from "@/components/languages/LanguageVertical";
import { site } from "@/lib/content";
import { getLanguagePage, languagePages } from "@/lib/languagePages";
import { breadcrumbList, faqPageSchema } from "@/lib/schema";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return languagePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getLanguagePage(slug);
  if (!data) return {};

  const url = `${site.url}/languages/${slug}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/languages/${slug}` },
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

export default async function LanguagePage({ params }: PageProps) {
  const { slug } = await params;
  const data = getLanguagePage(slug);
  if (!data) notFound();

  const trail = [
    { name: "Languages", path: "/languages" },
    { name: data.name, path: `/languages/${slug}` },
  ];
  const breadcrumb = breadcrumbList(trail);

  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <LanguageVertical page={data} />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              breadcrumb,
              faqPageSchema(
                data.faqs.map((item) => ({
                  question: item.q,
                  answer: item.a,
                })),
                { graphNode: true },
              ),
            ],
          }),
        }}
      />
    </>
  );
}

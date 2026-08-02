import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";
import { site } from "@/lib/content";
import { pageMetadata } from "@/lib/seoMeta";
import { breadcrumbList, jsonLdGraph, serviceSchema } from "@/lib/schema";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const baseMeta = pageMetadata({
  title: "Book a Pilot — Get a Live SvaraCall Demo",
  description:
    "Book a SvaraCall AI pilot. We'll place a live AI call to your own phone in Telugu, Hindi, or English so you can hear the agent before you commit.",
  path: "/book-a-pilot",
});

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const hasTrackingParams = Object.keys(params).length > 0;

  // ROI calculator links pass ?leads=&industry=&recovered= — keep them
  // usable, but never index variants. Canonical stays /book-a-pilot.
  if (hasTrackingParams) {
    return {
      ...baseMeta,
      robots: { index: false, follow: true },
    };
  }

  return baseMeta;
}

const trail = [{ name: "Book a pilot", path: "/book-a-pilot" }];

const graph = jsonLdGraph([
  breadcrumbList(trail),
  serviceSchema({
    name: "SvaraCall AI Pilot",
    description:
      "Book a SvaraCall AI pilot. We'll place a live AI call to your own phone in Telugu, Hindi, or English so you can hear the agent before you commit.",
    url: `${site.url}/book-a-pilot`,
    options: { graphNode: true },
  }),
]);

export default function BookAPilotPage() {
  return (
    <>
      <Breadcrumbs trail={trail} />
      <main>
        <Contact />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graph),
        }}
      />
    </>
  );
}

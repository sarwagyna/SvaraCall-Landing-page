import type { Metadata } from "next";
import { site } from "@/lib/content";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Absolute or site-relative image for OG/Twitter */
  image?: string;
};

/** Consistent title, description, canonical, Open Graph, and Twitter for any page. */
export function pageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
}: PageMetaInput): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const ogImages = [{ url: image }];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: site.name,
      title,
      description,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** Shared helper for generateMetadata on programmatic slug pages. */
export function slugMetadata(input: PageMetaInput): Metadata {
  return pageMetadata(input);
}

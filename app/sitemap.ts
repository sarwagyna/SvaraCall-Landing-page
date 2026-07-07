import type { MetadataRoute } from "next";
import { site, industryPages } from "@/lib/content";
import { routes, bookPilotHref } from "@/lib/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.dateModified);

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...routes.map((route) => ({
      url: `${site.url}${route.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${site.url}${bookPilotHref}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...["/about", "/partner"].map((path) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...industryPages.map((industry) => ({
      url: `${site.url}/industries/${industry.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

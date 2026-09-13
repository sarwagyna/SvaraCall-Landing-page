import type { MetadataRoute } from "next";
import { site, industryPages } from "@/lib/content";
import { languagePages } from "@/lib/languagePages";
import { useCasePages } from "@/lib/useCasePages";
import { featurePages } from "@/lib/featurePages";
import { comparePages } from "@/lib/comparePages";
import {
  integrationPages,
  solutionPages,
} from "@/lib/integrationPages";
import { nichePages } from "@/lib/nichePages";
import { templatePages } from "@/lib/templatePages";
import { launchHref } from "@/lib/launch";
import { routes, bookPilotHref } from "@/lib/nav";
import { publishedLegalDocs } from "@/lib/legalDocs";

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
    {
      url: `${site.url}${launchHref}`,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    ...["/about", "/partner"].map((path) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...publishedLegalDocs.map((doc) => ({
      url: `${site.url}/${doc.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
    ...industryPages.map((industry) => ({
      url: `${site.url}/industries/${industry.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...languagePages.map((page) => ({
      url: `${site.url}/languages/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...useCasePages.map((page) => ({
      url: `${site.url}/use-cases/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...featurePages.map((page) => ({
      url: `${site.url}/features/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...solutionPages.map((page) => ({
      url: `${site.url}/solutions/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...integrationPages.map((page) => ({
      url: `${site.url}/integrations/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...comparePages.map((page) => ({
      url: `${site.url}/compare/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...nichePages.map((page) => ({
      url: `${site.url}/for/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...templatePages.map((page) => ({
      url: `${site.url}/templates/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}

import { site } from "@/lib/content";

export type Crumb = { name: string; path: string };

export function faqPageSchema(
  items: { question: string; answer: string }[],
  options?: { graphNode?: boolean },
) {
  return {
    ...(options?.graphNode ? {} : { "@context": "https://schema.org" }),
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbList(trail: Crumb[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  options?: { graphNode?: boolean };
}) {
  return {
    ...(input.options?.graphNode ? {} : { "@context": "https://schema.org" }),
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: ["IN", "US", "AE", "GB", "AU"],
  };
}

export function softwareApplicationSchema(input: {
  name: string;
  description: string;
  url: string;
  featureList?: string[];
  options?: { graphNode?: boolean };
}) {
  return {
    ...(input.options?.graphNode ? {} : { "@context": "https://schema.org" }),
    "@type": "SoftwareApplication",
    name: input.name,
    description: input.description,
    url: input.url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: `${site.url}/book-a-pilot`,
    },
    ...(input.featureList?.length
      ? { featureList: input.featureList }
      : {}),
  };
}

export function howToSchema(input: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  options?: { graphNode?: boolean };
}) {
  return {
    ...(input.options?.graphNode ? {} : { "@context": "https://schema.org" }),
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    step: input.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function collectionPageSchema(input: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
  options?: { graphNode?: boolean };
}) {
  return {
    ...(input.options?.graphNode ? {} : { "@context": "https://schema.org" }),
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: input.url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: input.items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

export function articleSchema(input: {
  name: string;
  description: string;
  url: string;
  dateModified?: string;
  options?: { graphNode?: boolean };
}) {
  return {
    ...(input.options?.graphNode ? {} : { "@context": "https://schema.org" }),
    "@type": "Article",
    headline: input.name,
    description: input.description,
    url: input.url,
    dateModified: input.dateModified ?? site.dateModified,
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/android-chrome-512x512.png`,
      },
    },
    mainEntityOfPage: input.url,
  };
}

export function jsonLdGraph(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

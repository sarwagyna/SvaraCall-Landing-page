import { site } from "@/lib/content";

export type Crumb = { name: string; path: string };

// Build a BreadcrumbList JSON-LD node (Home is prepended automatically).
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

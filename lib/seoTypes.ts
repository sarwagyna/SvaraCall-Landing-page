export type SeoFaq = { q: string; a: string };

export type SeoStat = { value: string; label: string };

export type SeoLink = { name: string; href: string };

export type SeoStep = { title: string; body: string };

export type SeoCard = { title: string; body: string };

/** Shared shape for Phase-1 programmatic commercial pages. */
export type SeoProgrammaticPage = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  subcopy: string;
  primaryCta?: string;
  chips?: string[];
  stats: SeoStat[];
  problemTitle: string;
  problem: string;
  currentTitle: string;
  currentSteps: string[];
  aiTitle: string;
  aiSteps: string[];
  benefitsTitle: string;
  benefits: SeoCard[];
  roiTitle: string;
  roi: SeoStat[];
  implTitle: string;
  implementation: SeoStep[];
  relatedTitle: string;
  related: SeoLink[];
  faqsTitle: string;
  faqs: SeoFaq[];
  scriptTitle?: string;
  scriptExcerpt?: string;
  tableTitle?: string;
  tableHeaders?: string[];
  tableRows?: string[][];
  ctaTitle: string;
  ctaAccent: string;
  ctaBody: string;
};

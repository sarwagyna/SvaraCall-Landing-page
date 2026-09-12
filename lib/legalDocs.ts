import { site } from "@/lib/content";

export type LegalSlug =
  | "terms"
  | "privacy"
  | "aup"
  | "telephony-compliance"
  | "dpa"
  | "subprocessors"
  | "refunds";

export type LegalDoc = {
  slug: LegalSlug;
  file: string;
  title: string;
  shortTitle: string;
  description: string;
  /** False = keep on file for request-only sharing; do not publish a route. */
  published: boolean;
};

export const legalDocs: LegalDoc[] = [
  {
    slug: "terms",
    file: "01-terms-of-service.md",
    title: "Terms of Service",
    shortTitle: "Terms",
    description:
      "Terms of Service for the SvaraCall platform operated by Sarwagyna Private Limited.",
    published: true,
  },
  {
    slug: "privacy",
    file: "02-privacy-policy.md",
    title: "Privacy Policy",
    shortTitle: "Privacy",
    description:
      "How Sarwagyna Private Limited collects, uses, and protects personal data on SvaraCall.",
    published: true,
  },
  {
    slug: "aup",
    file: "03-acceptable-use-policy.md",
    title: "Acceptable Use Policy",
    shortTitle: "Acceptable use",
    description:
      "Permitted and prohibited uses of the SvaraCall AI calling platform.",
    published: true,
  },
  {
    slug: "telephony-compliance",
    file: "04-telephony-ai-voice-compliance-addendum.md",
    title: "Telephony and AI Voice Compliance Addendum",
    shortTitle: "Telephony compliance",
    description:
      "India telephony and AI-voice compliance obligations for SvaraCall customers.",
    published: false,
  },
  {
    slug: "dpa",
    file: "05-data-processing-addendum.md",
    title: "Data Processing Addendum",
    shortTitle: "DPA",
    description:
      "Data Processing Addendum between SvaraCall customers and Sarwagyna Private Limited.",
    published: true,
  },
  {
    slug: "subprocessors",
    file: "06-subprocessor-list.md",
    title: "Subprocessor List",
    shortTitle: "Subprocessors",
    description:
      "Third parties that help Sarwagyna Private Limited deliver the SvaraCall platform.",
    published: false,
  },
  {
    slug: "refunds",
    file: "07-refund-and-cancellation-policy.md",
    title: "Refund and Cancellation Policy",
    shortTitle: "Refunds",
    description:
      "Refund and cancellation terms for SvaraCall subscriptions and usage charges.",
    published: true,
  },
];

export const publishedLegalDocs = legalDocs.filter((doc) => doc.published);

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return legalDocs.find((doc) => doc.slug === slug);
}

export function legalUrl(slug: LegalSlug) {
  return `${site.url}/${slug}`;
}

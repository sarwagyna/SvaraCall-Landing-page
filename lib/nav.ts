// Shared route list used by Nav, Footer, Explore, and sitemap.
export type Route = { href: string; label: string };

/** Full crawlable route list (sitemap / SEO). Not the header menu. */
export const routes: Route[] = [
  { href: "/solutions", label: "Solutions" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/voice-agents", label: "Voice agents" },
  { href: "/features", label: "Features" },
  { href: "/languages", label: "Languages" },
  { href: "/integrations", label: "Integrations" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/industries", label: "Industries" },
  { href: "/for", label: "By business" },
  { href: "/templates", label: "Templates" },
  { href: "/compare", label: "Compare" },
  { href: "/compliance", label: "Compliance" },
  { href: "/faq", label: "FAQ" },
];

export const bookPilotHref = "/book-a-pilot";

/** Vertical space reserved for the fixed CardNav bar */
export const navTopOffset = "calc(60px + 1.2em)";
export const navTopOffsetMd = "calc(60px + 2em)";

/** Primary header menu — keep this short. */
export const primaryNav = {
  solutions: [
    { label: "All solutions", href: "/solutions", ariaLabel: "View all solutions" },
    { label: "Industries", href: "/industries", ariaLabel: "View industries" },
    { label: "Use cases", href: "/use-cases", ariaLabel: "View use cases" },
  ],
  platform: [
    { label: "How it works", href: "/how-it-works", ariaLabel: "How it works" },
    { label: "Integrations", href: "/integrations", ariaLabel: "Integrations" },
    { label: "Languages", href: "/languages", ariaLabel: "Languages" },
  ],
  company: [
    { label: "About", href: "/about", ariaLabel: "About SvaraCall AI" },
    { label: "Partner", href: "/partner", ariaLabel: "Partner with us" },
  ],
} as const;

/** Footer columns — includes links moved out of the header. */
export const footerNav = {
  product: [
    { href: "/how-it-works", label: "How it works" },
    { href: "/features", label: "Features" },
    { href: "/voice-agents", label: "Voice agents" },
    { href: "/integrations", label: "Integrations" },
    { href: "/languages", label: "Languages" },
    { href: "/compliance", label: "Security & compliance" },
    { href: bookPilotHref, label: "Book a pilot" },
  ],
  solutions: [
    { href: "/solutions", label: "All solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/use-cases", label: "Use cases" },
    { href: "/for", label: "By business" },
    { href: "/templates", label: "Templates" },
    { href: "/compare", label: "Compare" },
    { href: "/industries/ecommerce", label: "E-commerce" },
    { href: "/industries/fintech", label: "Lending & Collections" },
    { href: "/industries/insurance", label: "Insurance" },
    { href: "/industries/healthcare", label: "Healthcare" },
    { href: "/industries/automotive", label: "Automotive" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/partner", label: "Partner" },
    {
      href: "https://sarwagyna.com/careers",
      label: "Careers",
      external: true,
    },
    { href: "/faq", label: "FAQ" },
  ],
} as const;

export function bookPilotWithParams(
  params: Record<string, string | number | undefined>,
) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") {
      search.set(key, String(value));
    }
  }
  const qs = search.toString();
  return qs ? `${bookPilotHref}?${qs}` : bookPilotHref;
}

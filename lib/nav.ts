import { site } from "@/lib/content";
import { launchHref } from "@/lib/launch";

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
export { launchHref };
export const appLoginHref = site.appUrl;

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

/** Footer columns — one column per category (links moved out of the header). */
export type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { href: "/how-it-works", label: "How SvaraCall works" },
      { href: "/voice-agents", label: "Voice agent types" },
      { href: "/integrations", label: "CRM & dialer integrations" },
      { href: "/languages", label: "Voice languages" },
      { href: "/compliance", label: "Security & compliance" },
      { href: bookPilotHref, label: "Schedule a pilot" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/solutions", label: "Browse solutions" },
      { href: "/solutions/lead-follow-up", label: "Lead follow-up" },
      { href: "/solutions/appointment-booking", label: "Appointment booking" },
      { href: "/solutions/no-show-recovery", label: "No-show recovery" },
      { href: "/solutions/payment-reminders", label: "Payment reminders" },
      { href: "/solutions/win-back", label: "Win-back" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/industries", label: "Browse industries" },
      { href: "/industries/ecommerce", label: "E-commerce" },
      { href: "/industries/healthcare", label: "Healthcare" },
      { href: "/industries/fintech", label: "Lending & collections" },
      { href: "/industries/insurance", label: "Insurance" },
      { href: "/industries/real-estate", label: "Real estate" },
      { href: "/industries/education", label: "Education" },
      { href: "/industries/automotive", label: "Automotive" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { href: "/use-cases", label: "Browse use cases" },
      { href: "/use-cases/lead-follow-up", label: "Lead follow-up calls" },
      { href: "/use-cases/appointment-reminders", label: "Appointment reminder calls" },
      { href: "/use-cases/debt-collection", label: "Debt collection" },
      { href: "/use-cases/ai-receptionist", label: "AI receptionist" },
      { href: "/use-cases/insurance-renewals", label: "Insurance renewals" },
      { href: "/use-cases/patient-follow-up", label: "Patient follow-up calls" },
    ],
  },
  {
    title: "By business",
    links: [
      { href: "/for", label: "All niches" },
      { href: "/for/dentists", label: "Dentists" },
      { href: "/for/hospitals", label: "Hospitals" },
      { href: "/for/coaching-centers", label: "Coaching centers" },
      { href: "/for/nbfcs", label: "NBFCs" },
      { href: "/for/real-estate-brokers", label: "Real estate brokers" },
      { href: "/for/restaurants", label: "Restaurants" },
    ],
  },
  {
    title: "Features",
    links: [
      { href: "/features", label: "All features" },
      { href: "/features/multilingual-ai", label: "Multilingual AI" },
      { href: "/features/voice-cloning", label: "Voice cloning" },
      { href: "/features/live-transfer", label: "Live transfer" },
      { href: "/features/crm-integration", label: "CRM integration" },
      { href: "/features/analytics", label: "Analytics" },
      { href: "/features/dnc-management", label: "DNC management" },
    ],
  },
  {
    title: "Templates",
    links: [
      { href: "/templates", label: "All templates" },
      { href: "/templates/lead-follow-up-script", label: "Lead follow-up script" },
      { href: "/templates/appointment-reminder-script", label: "Appointment reminder script" },
      { href: "/templates/collection-call-script", label: "Collection call script" },
      { href: "/templates/insurance-renewal-script", label: "Insurance renewal script" },
      { href: "/templates/patient-follow-up-script", label: "Patient follow-up script" },
    ],
  },
  {
    title: "Compare",
    links: [
      { href: "/compare", label: "All comparisons" },
      { href: "/compare/svaracall-vs-retell-ai", label: "vs Retell AI" },
      { href: "/compare/svaracall-vs-vapi", label: "vs Vapi" },
      { href: "/compare/svaracall-vs-exotel", label: "vs Exotel" },
      { href: "/compare/svaracall-vs-twilio", label: "vs Twilio" },
      { href: "/compare/svaracall-vs-bolna", label: "vs Bolna" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About the company" },
      { href: launchHref, label: "Pilot launch" },
      { href: "/partner", label: "Partner program" },
      {
        href: "https://sarwagyna.com/careers",
        label: "Careers",
        external: true,
      },
      { href: "/faq", label: "Help & FAQ" },
    ],
  },
];

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

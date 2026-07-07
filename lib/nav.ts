// Shared route list used by Nav, Footer, Explore, and sitemap.
export type Route = { href: string; label: string };

export const routes: Route[] = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/voice-agents", label: "Voice agents" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/industries", label: "Industries" },
  { href: "/compliance", label: "Compliance" },
  { href: "/faq", label: "FAQ" },
];

export const bookPilotHref = "/book-a-pilot";

// Shared route list used by Nav, Footer, Explore, and sitemap.
export type Route = { href: string; label: string };

export const routes: Route[] = [
  { href: "/solutions", label: "Solutions" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/voice-agents", label: "Voice agents" },
  { href: "/languages", label: "Languages" },
  { href: "/integrations", label: "Integrations" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/industries", label: "Industries" },
  { href: "/compliance", label: "Compliance" },
  { href: "/faq", label: "FAQ" },
];

export const bookPilotHref = "/book-a-pilot";

/** Vertical space reserved for the fixed CardNav bar */
export const navTopOffset = "calc(60px + 1.2em)";
export const navTopOffsetMd = "calc(60px + 2em)";

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

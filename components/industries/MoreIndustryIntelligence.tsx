import Link from "next/link";
import Reveal from "@/components/Reveal";

export const industryIntelligence = [
  { code: "ECOM", label: "E-commerce", href: "/industries/ecommerce" },
  { code: "AUTO", label: "Automotive", href: "/industries/automotive" },
  { code: "LEND", label: "Lending & Collections", href: "/industries/fintech" },
  { code: "INS", label: "Insurance", href: "/industries/insurance" },
  {
    code: "BCM",
    label: "Brokerage & Capital Markets",
    href: "/industries/brokerage",
  },
  { code: "RE", label: "Real Estate", href: "/industries/real-estate" },
  { code: "EDU", label: "Education", href: "/industries/education" },
  { code: "HLTH", label: "Healthcare", href: "/industries/healthcare" },
  { code: "TRV", label: "Travel & Hospitality", href: "/industries" },
] as const;

type MoreIndustryIntelligenceProps = {
  /** Current industry slug — that pill is omitted from the strip. */
  currentSlug?: string;
};

export default function MoreIndustryIntelligence({
  currentSlug,
}: MoreIndustryIntelligenceProps) {
  const items = industryIntelligence.filter((item) => {
    if (!currentSlug) return true;
    const slug = item.href.replace("/industries/", "").replace("/industries", "");
    if (item.href === "/industries") return currentSlug !== "";
    return slug !== currentSlug;
  });

  return (
    <section
      aria-labelledby="more-industry-intelligence-heading"
      className="bg-canvas"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16 md:py-20">
        <Reveal>
          <h2
            id="more-industry-intelligence-heading"
            className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-mute sm:text-sm"
          >
            More industry intelligence
          </h2>
        </Reveal>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:mt-10 sm:gap-3">
          {items.map((item, i) => (
            <Reveal key={item.code} as="li" delayMs={Math.min(i * 35, 280)}>
              <Link
                href={item.href}
                className="inline-flex max-w-full items-center gap-2 rounded-pill bg-canvas-soft py-1.5 pl-1.5 pr-3.5 ring-1 ring-line transition-colors hover:bg-primary-soft hover:ring-primary/30 sm:pr-4"
              >
                <span className="rounded-md bg-primary-soft px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary sm:text-[11px]">
                  {item.code}
                </span>
                <span className="truncate text-sm font-semibold text-ink-deep">
                  {item.label}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

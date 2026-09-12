import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";
import { languagePages } from "@/lib/languagePages";
import { footerColumns } from "@/lib/nav";
import ShareLinks from "@/components/ShareLinks";

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/aup", label: "Acceptable Use" },
  { href: "/dpa", label: "Data Processing Addendum" },
  { href: "/refunds", label: "Refunds" },
] as const;

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    "text-sm text-white/65 transition-colors hover:text-white";

  if (external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0b1110] text-white/80">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        {/* Brand + Backed by */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo-mark.webp"
                alt="SvaraCall AI"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="text-sm font-semibold text-white">
                SvaraCall AI
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              AI phone agents that sound human — in Telugu, Hindi &amp; English,
              tuned to your business.
            </p>
            <p className="mt-5 text-sm font-semibold text-white">
              {site.legalName}
            </p>
            <p className="mt-1 text-sm text-white/55">
              {site.city} · {site.state} · {site.country}
            </p>
            <p className="mt-3 text-sm text-white/55">
              For pricing and a demo, please contact
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 inline-block text-sm text-white/70 transition-colors hover:text-primary"
            >
              {site.email}
            </a>
            <ShareLinks />
          </div>

          <div className="shrink-0 lg:pt-1">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                Backed by
              </p>
              <a
                href="https://cartesia.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-sm bg-white px-1.5 py-1 transition-opacity hover:opacity-90"
              >
                <Image
                  src="/Cartesia_Startups_Logo.png"
                  alt="Cartesia AI Startups"
                  width={280}
                  height={29}
                  className="h-6 w-auto"
                />
              </a>
              <a
                href="https://www.nvidia.com/en-us/startups/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-opacity hover:opacity-90"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/nvidia-inception-program-badge-rgb-for-screen.svg"
                  alt="NVIDIA Inception Program"
                  width={180}
                  height={66}
                  className="block h-16 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Category columns */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-sm font-bold text-white">{column.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Legal">
            <p className="text-sm font-bold text-white">Legal</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
              <li>
                <FooterLink href={`mailto:${site.email}`} label="Contact" />
              </li>
            </ul>
          </nav>
        </div>

        {/* Languages bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
            Languages
          </p>
          <nav
            aria-label="Languages"
            className="mt-4 flex flex-wrap gap-x-5 gap-y-2"
          >
            {languagePages.map((page) => (
              <Link
                key={page.slug}
                href={`/languages/${page.slug}`}
                lang={page.langAttr}
                className="text-sm text-white/70 transition-colors hover:text-primary"
              >
                {page.nativeName}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright bar */}
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights
            reserved. CIN: {site.cin}
          </p>
          <span>Last updated: {site.lastUpdated}</span>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";
import { languagePages } from "@/lib/languagePages";
import { footerColumns } from "@/lib/nav";

const legalLinks = [
  { href: "/compliance", label: "Compliance" },
  { href: `${site.parentUrl}/privacy`, label: "Privacy", external: true },
  { href: `${site.parentUrl}/terms`, label: "Terms", external: true },
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
        {/* Brand */}
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
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block text-sm text-white/70 transition-colors hover:text-primary"
          >
            {site.email}
          </a>
          <p className="mt-5 text-sm text-white/55">
            Also by{" "}
            <a
              href={site.parentUrl}
              className="font-semibold text-white hover:underline"
            >
              Sarwagyna
            </a>
            :{" "}
            <a
              href={site.svaraRxUrl}
              className="inline-flex items-center gap-1.5 align-middle font-semibold text-primary hover:underline"
            >
              <Image
                src="/SvaraRx-Icon-sm.webp"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4 rounded-[4px]"
              />
              SvaraRx
            </a>
          </p>
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

        {/* Backed by */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
            Backed by
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href="https://cartesia.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <Image
                src="/Cartesia_Startups_Logo.png"
                alt="Cartesia AI Startups"
                width={280}
                height={29}
                className="h-7 w-auto"
              />
            </a>
            <a
              href="https://www.nvidia.com/en-us/startups/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/nvidia-inception-program-badge-rgb-for-screen.svg"
                alt="NVIDIA Inception Program"
                width={140}
                height={60}
                className="h-[52px] w-auto"
              />
            </a>
          </div>
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
          <div className="flex flex-wrap gap-4">
            <a
              href={`${site.parentUrl}/privacy`}
              className="transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
            <a
              href={`${site.parentUrl}/terms`}
              className="transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
            <span>Last updated: {site.lastUpdated}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/content";

export default function ShareLinks() {
  const pathname = usePathname();
  const url = `${site.url}${pathname === "/" ? "" : pathname}`;
  const text = encodeURIComponent(site.tagline);
  const encodedUrl = encodeURIComponent(url);

  const links = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`,
    },
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${encodedUrl}`,
    },
  ];

  return (
    <nav aria-label="Share this page" className="mt-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
        Share
      </p>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

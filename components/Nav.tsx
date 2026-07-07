"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { bookPilotHref } from "@/lib/nav";
import { useCases as siteUseCases } from "@/lib/content";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/voice-agents", label: "Voice agents" },
  { href: "/compliance", label: "Compliance" },
  { href: "/faq", label: "FAQ" },
];

type MenuItem = {
  label: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
};

const iconClass = "h-[18px] w-[18px] shrink-0";

const company: MenuItem[] = [
  {
    label: "About Us",
    href: "/about",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    label: "Careers",
    href: "https://sarwagyna.com/careers",
    external: true,
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    label: "Partner",
    href: "/partner",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21a9 9 0 1 0-9-9" />
        <path d="m8 12 3 3 5-6" />
      </svg>
    ),
  },
];

const industries: MenuItem[] = [
  {
    label: "Healthcare",
    href: "/industries/healthcare",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    label: "Fintech",
    href: "/industries/fintech",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5" />
        <path d="M16 12h.01" />
      </svg>
    ),
  },
  {
    label: "Consultation",
    href: "/industries/consultation",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "E-commerce",
    href: "/industries/ecommerce",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.5 3h2l2.6 12.4a2 2 0 0 0 2 1.6h8.3a2 2 0 0 0 2-1.6L21.5 7H6" />
      </svg>
    ),
  },
  {
    label: "Real Estate",
    href: "/industries/real-estate",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M10 21v-4h4v4" />
      </svg>
    ),
  },
  {
    label: "HR Tech",
    href: "/industries/hr-tech",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Education",
    href: "/industries/education",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m22 10-10-5L2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" />
      </svg>
    ),
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);
  const companyRef = useRef<HTMLLIElement | null>(null);

  // Close menus whenever the route changes. Deferred to the next frame so we
  // don't call setState synchronously inside the effect body.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setOpen(false);
      setCompanyOpen(false);
      setMenuOpen(false);
      setMobileSolutionsOpen(false);
      setMobileCompanyOpen(false);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!companyOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (
        companyRef.current &&
        !companyRef.current.contains(event.target as Node)
      ) {
        setCompanyOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCompanyOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [companyOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href: string) =>
    `text-sm font-semibold transition-colors hover:text-ink ${
      isActive(href) ? "text-ink" : "text-body"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-canvas-soft bg-canvas/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-[900] tracking-tight text-ink"
        >
          <Image
            src="/android-chrome-192x192.png"
            alt=""
            width={32}
            height={32}
            priority
            className="h-8 w-8 rounded-input"
          />
          SvaraCall AI
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          <li ref={dropdownRef} className="static md:relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 text-sm font-semibold text-body transition-colors hover:text-ink"
            >
              Solutions
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 8 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {open && (
              <div className="absolute left-1/2 top-full z-50 mt-3 max-h-[calc(100vh-6rem)] w-[min(52rem,calc(100vw-2.5rem))] -translate-x-1/2 overflow-y-auto rounded-card border border-canvas-soft bg-canvas p-6 shadow-2xl">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_15rem]">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-lg font-semibold text-ink">Use Cases</p>
                      <Link
                        href="/use-cases"
                        onClick={() => setOpen(false)}
                        className="text-xs font-semibold text-ink-deep hover:underline"
                      >
                        View all →
                      </Link>
                    </div>
                    <ul className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
                      {siteUseCases.map((item) => (
                        <li key={item.title}>
                          <Link
                            href="/use-cases"
                            onClick={() => setOpen(false)}
                            className="block rounded-input px-3 py-2 transition-colors hover:bg-canvas-soft"
                          >
                            <span className="block text-sm font-medium text-body">
                              {item.title}
                            </span>
                            <span className="mt-0.5 block text-xs text-mute">
                              {item.body}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:border-l lg:border-canvas-soft lg:pl-6">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-lg font-semibold text-ink">
                        Industries
                      </p>
                      <Link
                        href="/industries"
                        onClick={() => setOpen(false)}
                        className="text-xs font-semibold text-ink-deep hover:underline"
                      >
                        View all →
                      </Link>
                    </div>
                    <ul className="flex flex-col gap-0.5">
                      {industries.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="group flex items-center gap-3 rounded-input px-3 py-2 text-sm font-medium text-body transition-colors hover:bg-canvas-soft hover:text-ink"
                          >
                            <span className="text-mute transition-colors group-hover:text-ink">
                              {item.icon}
                            </span>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>

          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            </li>
          ))}

          <li ref={companyRef} className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={companyOpen}
              onClick={() => setCompanyOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 text-sm font-semibold text-body transition-colors hover:text-ink"
            >
              Company
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className={`h-4 w-4 transition-transform ${companyOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 8 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {companyOpen && (
              <div className="absolute right-0 top-full z-50 mt-3 w-60 overflow-hidden rounded-card border border-canvas-soft bg-canvas p-2 shadow-2xl">
                <ul className="flex flex-col">
                  {company.map((item) =>
                    item.external ? (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setCompanyOpen(false)}
                          className="group flex items-center gap-3 rounded-input px-3 py-2.5 text-sm font-medium text-body transition-colors hover:bg-canvas-soft hover:text-ink"
                        >
                          <span className="text-mute transition-colors group-hover:text-ink">
                            {item.icon}
                          </span>
                          {item.label}
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="ml-auto h-3.5 w-3.5 text-mute"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17 17 7M7 7h10v10" />
                          </svg>
                        </a>
                      </li>
                    ) : (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setCompanyOpen(false)}
                          className="group flex items-center gap-3 rounded-input px-3 py-2.5 text-sm font-medium text-body transition-colors hover:bg-canvas-soft hover:text-ink"
                        >
                          <span className="text-mute transition-colors group-hover:text-ink">
                            {item.icon}
                          </span>
                          {item.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href={bookPilotHref}
            className="hidden h-11 items-center rounded-pill bg-primary px-5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active sm:inline-flex"
          >
            Book a pilot
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="grid h-11 w-11 place-items-center rounded-input text-ink md:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-canvas-soft bg-canvas md:hidden">
          <div className="mx-auto max-w-6xl px-5 py-3">
            {/* Solutions accordion */}
            <button
              type="button"
              aria-expanded={mobileSolutionsOpen}
              onClick={() => setMobileSolutionsOpen((prev) => !prev)}
              className="flex w-full items-center justify-between py-2.5 text-base font-semibold text-ink"
            >
              Solutions
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className={`h-5 w-5 text-mute transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 8 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mobileSolutionsOpen && (
              <div className="mb-2 mt-1 rounded-card border border-canvas-soft bg-canvas-soft/60 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-mute">
                    Use Cases
                  </p>
                  <Link
                    href="/use-cases"
                    className="text-xs font-semibold text-ink-deep hover:underline"
                  >
                    View all →
                  </Link>
                </div>
                <ul className="flex flex-col">
                  {siteUseCases.map((item) => (
                    <li key={item.title}>
                      <Link
                        href="/use-cases"
                        className="block rounded-input px-2 py-2 text-sm font-medium text-body transition-colors hover:bg-canvas hover:text-ink"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mb-3 mt-5 flex items-center justify-between border-t border-canvas-soft pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-mute">
                    Industries
                  </p>
                  <Link
                    href="/industries"
                    className="text-xs font-semibold text-ink-deep hover:underline"
                  >
                    View all →
                  </Link>
                </div>
                <ul className="flex flex-col">
                  {industries.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-3 rounded-input px-2 py-2 text-sm font-medium text-body transition-colors hover:bg-canvas hover:text-ink"
                      >
                        <span className="text-mute transition-colors group-hover:text-ink">
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2.5 text-base font-semibold ${
                      isActive(link.href) ? "text-ink" : "text-body"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Company accordion */}
            <button
              type="button"
              aria-expanded={mobileCompanyOpen}
              onClick={() => setMobileCompanyOpen((prev) => !prev)}
              className="flex w-full items-center justify-between py-2.5 text-base font-semibold text-ink"
            >
              Company
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className={`h-5 w-5 text-mute transition-transform ${mobileCompanyOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 8 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mobileCompanyOpen && (
              <ul className="mb-2 flex flex-col rounded-card border border-canvas-soft bg-canvas-soft/60 p-2">
                {company.map((item) =>
                  item.external ? (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-input px-2 py-2 text-sm font-medium text-body transition-colors hover:bg-canvas hover:text-ink"
                      >
                        <span className="text-mute transition-colors group-hover:text-ink">
                          {item.icon}
                        </span>
                        {item.label}
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="ml-auto h-3.5 w-3.5 text-mute"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                      </a>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-3 rounded-input px-2 py-2 text-sm font-medium text-body transition-colors hover:bg-canvas hover:text-ink"
                      >
                        <span className="text-mute transition-colors group-hover:text-ink">
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            )}

            <div className="pb-1 pt-3">
              <Link
                href={bookPilotHref}
                className="inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary"
              >
                Book a pilot
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

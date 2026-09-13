"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
  external?: boolean;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  logoHref?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  ctaLabel?: string;
  ctaHref?: string;
  loginLabel?: string;
  loginHref?: string;
  navClassName?: string;
  onNavigate?: () => void;
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function CardNav({
  logo,
  logoAlt = "Logo",
  logoHref = "/",
  items,
  className = "",
  baseColor = "#fff",
  menuColor,
  buttonBgColor,
  buttonTextColor,
  ctaLabel = "Get Started",
  ctaHref = "/",
  loginLabel,
  loginHref,
  navClassName = "",
  onNavigate,
}: CardNavProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!isExpanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isExpanded]);

  const closeMenu = () => setIsExpanded(false);

  const toggleMenu = () => setIsExpanded((open) => !open);

  const handleLinkClick = () => {
    onNavigate?.();
    closeMenu();
  };

  const linkClassName =
    "nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]";

  return (
    <div
      className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
    >
      <nav
        aria-label="Primary"
        className={`card-nav ${isExpanded ? "open" : ""} block rounded-xl shadow-md relative overflow-hidden ${navClassName}`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top relative z-[2] flex h-[60px] items-center p-2 pl-[1.1rem] md:justify-between">
          <div
            className={`hamburger-menu ${isExpanded ? "open" : ""} group order-3 flex h-full cursor-pointer flex-col items-center justify-center gap-[6px] md:order-none`}
            onClick={toggleMenu}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleMenu();
              }
            }}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            aria-expanded={isExpanded}
            aria-controls={panelId}
            tabIndex={0}
            style={{ color: menuColor || "#000" }}
          >
            <div
              className={`hamburger-line h-[2px] w-[30px] origin-center bg-current transition-transform duration-300 ease-out ${
                isExpanded ? "translate-y-[4px] rotate-45" : ""
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line h-[2px] w-[30px] origin-center bg-current transition-transform duration-300 ease-out ${
                isExpanded ? "-translate-y-[4px] -rotate-45" : ""
              } group-hover:opacity-75`}
            />
          </div>

          <Link
            href={logoHref}
            className="logo-container order-1 flex items-center gap-2 md:absolute md:left-1/2 md:top-1/2 md:order-none md:-translate-x-1/2 md:-translate-y-1/2"
            onClick={handleLinkClick}
          >
            <Image
              src={logo}
              alt={logoAlt}
              width={28}
              height={28}
              className="logo h-7 w-7"
              priority
            />
            <span className="font-poppins text-[15px] font-semibold tracking-tight text-white md:font-sans md:text-sm md:text-white/90">
              SvaraCall
              <span className="hidden md:inline"> AI</span>
            </span>
          </Link>

          <div className="order-2 ml-auto flex h-full items-center gap-1.5 md:order-none md:ml-0">
            {loginHref ? (
              <a
                href={loginHref}
                className="inline-flex h-full items-center rounded-[calc(0.75rem-0.2rem)] px-3 text-sm font-medium text-white/85 no-underline transition-colors hover:text-white"
              >
                {loginLabel ?? "Login"}
              </a>
            ) : null}
            <Link
              href={ctaHref}
              className="card-nav-cta-button hidden h-full items-center rounded-[calc(0.75rem-0.2rem)] border-0 px-4 font-medium no-underline transition-colors duration-300 md:inline-flex"
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
              onClick={handleLinkClick}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>

        {/* CSS grid 0fr→1fr expand — no GSAP, no layout measurement */}
        <div
          id={panelId}
          className={`grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div
              className={`card-nav-content flex flex-col items-stretch justify-start gap-2 p-2 md:flex-row md:items-stretch md:gap-3 ${
                isExpanded
                  ? "pointer-events-auto visible"
                  : "pointer-events-none invisible"
              }`}
              aria-hidden={!isExpanded}
            >
              {(items || []).slice(0, 3).map((item, idx) => (
                <div
                  key={`${item.label}-${idx}`}
                  className={`nav-card relative flex min-h-[60px] min-w-0 flex-[1_1_auto] select-none flex-col gap-2 rounded-[calc(0.75rem-0.2rem)] p-[12px_16px] transition-[opacity,transform] duration-[400ms] ease-out md:min-h-0 md:flex-[1_1_0%] ${
                    isExpanded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                  style={{
                    backgroundColor: item.bgColor,
                    color: item.textColor,
                    transitionDelay: isExpanded ? `${80 + idx * 60}ms` : "0ms",
                  }}
                >
                  <div className="nav-card-label text-[18px] font-normal tracking-[-0.5px] md:text-[22px]">
                    {item.label}
                  </div>
                  <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                    {item.links?.map((lnk, i) =>
                      lnk.external ? (
                        <a
                          key={`${lnk.label}-${i}`}
                          className={linkClassName}
                          href={lnk.href}
                          aria-label={lnk.ariaLabel}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLinkClick}
                        >
                          <ArrowUpRightIcon className="nav-card-link-icon shrink-0" />
                          {lnk.label}
                        </a>
                      ) : (
                        <Link
                          key={`${lnk.label}-${i}`}
                          className={linkClassName}
                          href={lnk.href}
                          aria-label={lnk.ariaLabel}
                          onClick={handleLinkClick}
                        >
                          <ArrowUpRightIcon className="nav-card-link-icon shrink-0" />
                          {lnk.label}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

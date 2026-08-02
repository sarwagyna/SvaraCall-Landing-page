"use client";

import { usePathname } from "next/navigation";
import CardNav, { type CardNavItem } from "@/components/CardNav";
import { bookPilotHref } from "@/lib/nav";

const items: CardNavItem[] = [
  {
    label: "Solutions",
    bgColor: "#0e0f0c",
    textColor: "#ffffff",
    links: [
      { label: "All solutions", href: "/solutions", ariaLabel: "View all solutions" },
      { label: "Use cases", href: "/use-cases", ariaLabel: "View use cases" },
      { label: "Industries", href: "/industries", ariaLabel: "View industries" },
      { label: "Voice agents", href: "/voice-agents", ariaLabel: "Voice agents" },
      { label: "Languages", href: "/languages", ariaLabel: "Languages" },
    ],
  },
  {
    label: "Platform",
    bgColor: "#163300",
    textColor: "#ffffff",
    links: [
      { label: "How it works", href: "/how-it-works", ariaLabel: "How it works" },
      { label: "Integrations", href: "/integrations", ariaLabel: "Integrations" },
      { label: "Compliance", href: "/compliance", ariaLabel: "Compliance" },
      { label: "FAQ", href: "/faq", ariaLabel: "Frequently asked questions" },
    ],
  },
  {
    label: "Company",
    bgColor: "#2a2b28",
    textColor: "#ffffff",
    links: [
      { label: "About", href: "/about", ariaLabel: "About SvaraCall AI" },
      { label: "Partner", href: "/partner", ariaLabel: "Partner with us" },
      {
        label: "Careers",
        href: "https://sarwagyna.com/careers",
        ariaLabel: "Careers at Sarwagyna",
        external: true,
      },
    ],
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      <CardNav
        key={pathname}
        logo="/logo-mark.webp"
        logoAlt="SvaraCall AI"
        logoHref="/"
        items={items}
        baseColor="rgba(20, 28, 26, 0.9)"
        menuColor="#f2f7f0"
        buttonBgColor="#9fe870"
        buttonTextColor="#09100b"
        navClassName="backdrop-blur-md"
        ctaLabel="Book a pilot"
        ctaHref={bookPilotHref}
        ease="power3.out"
      />
    </>
  );
}

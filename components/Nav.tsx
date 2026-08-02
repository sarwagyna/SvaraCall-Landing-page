"use client";

import { usePathname } from "next/navigation";
import CardNav, { type CardNavItem } from "@/components/CardNav";
import { bookPilotHref, primaryNav } from "@/lib/nav";

const items: CardNavItem[] = [
  {
    label: "Solutions",
    bgColor: "#0e0f0c",
    textColor: "#ffffff",
    links: [...primaryNav.solutions],
  },
  {
    label: "Platform",
    bgColor: "#163300",
    textColor: "#ffffff",
    links: [...primaryNav.platform],
  },
  {
    label: "Company",
    bgColor: "#2a2b28",
    textColor: "#ffffff",
    links: [...primaryNav.company],
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
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
  );
}

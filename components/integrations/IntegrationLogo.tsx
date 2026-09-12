"use client";

import { useState } from "react";
import {
  integrationMark,
  type Integration,
} from "@/lib/integrations";

type Props = {
  item: Pick<Integration, "id" | "name" | "color" | "mark">;
  size?: number;
  className?: string;
};

/** Full-bleed tile SVGs (already include their own colored background). */
const TILE_LOGOS = new Set([
  "airtel-sip",
  "aisensy",
  "bitrix24",
  "cashfree",
  "close",
  "copper",
  "drchrono",
  "easyecom",
  "epic",
  "exotel",
  "gohighlevel",
  "gupshup-sms",
  "gupshup-wa",
  "healthplix",
  "integrately",
  "interakt",
  "kaleyra",
  "knowlarity",
  "kylas",
  "leadsquared",
  "magento",
  "msg91",
  "pabbly",
  "payu",
  "practo",
  "servicenow",
  "tally",
  "unicommerce",
  "wati",
  "workato",
]);

/**
 * Brand logos from `/public/brand/integrations/{id}.svg`, with monogram fallback.
 * Path is under `/brand/` so it does not collide with `/integrations/[slug]`.
 */
export default function IntegrationLogo({
  item,
  size = 44,
  className = "",
}: Props) {
  const [failed, setFailed] = useState(false);
  const mark = integrationMark(item);
  const isTile = TILE_LOGOS.has(item.id);

  if (failed) {
    return (
      <span
        className={`flex shrink-0 items-center justify-center rounded-xl text-[11px] font-bold tracking-tight text-white shadow-sm ring-1 ring-white/10 ${className}`}
        style={{ width: size, height: size, backgroundColor: item.color }}
        aria-hidden
        title={item.name}
      >
        {mark.slice(0, 4)}
      </span>
    );
  }

  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl ring-1 ring-black/10 ${
        isTile ? "bg-transparent" : "bg-white"
      } ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
      title={item.name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/brand/integrations/${item.id}.svg`}
        alt={item.name}
        width={size}
        height={size}
        className={
          isTile
            ? "h-full w-full object-cover"
            : "h-full w-full object-contain p-2"
        }
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

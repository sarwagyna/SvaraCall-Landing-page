"use client";

import dynamic from "next/dynamic";
import type { SoftAuroraProps } from "./SoftAurora";

const SoftAurora = dynamic(() => import("./SoftAurora"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#0b1110]" aria-hidden />,
});

export default function SoftAuroraLazy(props: SoftAuroraProps) {
  return <SoftAurora {...props} />;
}

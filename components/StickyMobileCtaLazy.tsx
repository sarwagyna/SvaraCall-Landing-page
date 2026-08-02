"use client";

import dynamic from "next/dynamic";

const StickyMobileCta = dynamic(() => import("./StickyMobileCta"), {
  ssr: false,
});

export default StickyMobileCta;

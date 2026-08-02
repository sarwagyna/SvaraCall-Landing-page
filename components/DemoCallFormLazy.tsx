"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

type FormProps = ComponentProps<typeof import("./DemoCallForm").default>;

const DemoCallForm = dynamic(() => import("./DemoCallForm"), {
  ssr: false,
  loading: () => (
    <div
      className="h-12 w-full animate-pulse rounded-[12px] bg-canvas-soft"
      aria-hidden
    />
  ),
});

/** Code-split demo form so its JS is off the initial critical path. */
export default function DemoCallFormLazy(props: FormProps) {
  return <DemoCallForm {...props} />;
}

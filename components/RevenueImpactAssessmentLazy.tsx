"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// The assessment is a large, below-the-fold interactive widget. Loading its
// bundle only when the user scrolls near it keeps it off the homepage's
// initial main-thread work and initial JS payload.
const RevenueImpactAssessment = dynamic(
  () => import("./RevenueImpactAssessment"),
  { ssr: false },
);

export default function RevenueImpactAssessmentLazy() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setShow(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Reserve height while unloaded so the load doesn't shift layout (CLS).
  return (
    <div ref={ref} className="bg-ink" style={show ? undefined : { minHeight: 680 }}>
      {show ? <RevenueImpactAssessment /> : null}
    </div>
  );
}

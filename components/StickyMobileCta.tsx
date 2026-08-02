"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { bookPilotHref } from "@/lib/nav";

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const problem = document.getElementById("problem");
    const finalCta = document.getElementById("final-cta");
    if (!problem || !finalCta) return;

    let pastProblem = false;
    let finalInView = false;
    let raf = 0;

    const update = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setVisible(pastProblem && !finalInView);
      });
    };

    const problemObserver = new IntersectionObserver(
      ([entry]) => {
        pastProblem = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        update();
      },
      { threshold: 0 },
    );

    const finalObserver = new IntersectionObserver(
      ([entry]) => {
        finalInView = entry.isIntersecting;
        update();
      },
      { threshold: 0.15 },
    );

    problemObserver.observe(problem);
    finalObserver.observe(finalCta);

    return () => {
      cancelAnimationFrame(raf);
      problemObserver.disconnect();
      finalObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-canvas/95 p-4 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <Link
        href={bookPilotHref}
        onClick={() => trackEvent("sticky_cta_clicked")}
        className="flex h-12 w-full items-center justify-center rounded-pill bg-primary text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
      >
        Book a pilot
      </Link>
    </div>
  );
}

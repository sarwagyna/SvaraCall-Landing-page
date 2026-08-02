"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type LazyMountProps = {
  children: ReactNode;
  /** Reserve space before mount to avoid CLS. */
  minHeight?: number | string;
  rootMargin?: string;
  className?: string;
};

/**
 * Mount children only when near the viewport so below-fold JS stays off
 * the critical path (unlike next/dynamic alone, which still hydrates early).
 */
export default function LazyMount({
  children,
  minHeight,
  rootMargin = "240px 0px",
  className,
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null);
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
        if (entries.some((entry) => entry.isIntersecting)) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={show || minHeight === undefined ? undefined : { minHeight }}
    >
      {show ? children : null}
    </div>
  );
}

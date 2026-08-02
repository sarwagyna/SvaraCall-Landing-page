"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type RevealProps = {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  delayMs?: number;
};

/**
 * One shared IntersectionObserver for every Reveal on the page.
 * Dozens of per-instance observers force repeated scroll/layout work.
 */
const callbacks = new Map<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver() {
  if (typeof IntersectionObserver === "undefined") return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          sharedObserver?.unobserve(el);
          const cb = callbacks.get(el);
          if (cb) {
            callbacks.delete(el);
            cb();
          }
        }
      },
      // once: true behavior via unobserve; modest rootMargin avoids late reveals
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
  }
  return sharedObserver;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = getSharedObserver();
    if (!observer) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const reveal = () => setVisible(true);
    callbacks.set(node, reveal);
    observer.observe(node);

    return () => {
      callbacks.delete(node);
      observer.unobserve(node);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

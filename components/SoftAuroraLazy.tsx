"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { SoftAuroraProps } from "./SoftAurora";

const SoftAurora = dynamic(() => import("./SoftAurora"), {
  ssr: false,
  loading: () => <AuroraFallback />,
});

export type SoftAuroraLazyProps = SoftAuroraProps & {
  /** Wait until near the viewport before loading ogl (default true). */
  deferUntilVisible?: boolean;
  /** Wait for window `load` so LCP/FCP aren't competing with ogl. */
  deferUntilWindowLoad?: boolean;
  /** After gates pass, wait for idle (default timeout 3s). */
  deferUntilIdle?: boolean;
  idleTimeoutMs?: number;
};

function AuroraFallback() {
  return <div className="aurora-fallback h-full w-full" aria-hidden />;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function SoftAuroraLazy({
  deferUntilVisible = true,
  deferUntilWindowLoad = false,
  deferUntilIdle = false,
  idleTimeoutMs = 3000,
  ...props
}: SoftAuroraLazyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let observer: IntersectionObserver | undefined;

    const activate = () => {
      if (cancelled || prefersReducedMotion()) return;
      setReady(true);
    };

    const afterGates = () => {
      if (cancelled) return;

      const startIdle = () => {
        if (cancelled) return;
        if (!deferUntilIdle) {
          activate();
          return;
        }
        const ric = window.requestIdleCallback;
        if (typeof ric === "function") {
          idleId = ric(() => activate(), { timeout: idleTimeoutMs });
        } else {
          timeoutId = setTimeout(activate, Math.min(idleTimeoutMs, 400));
        }
      };

      if (deferUntilWindowLoad && document.readyState !== "complete") {
        window.addEventListener("load", startIdle, { once: true });
        return () => window.removeEventListener("load", startIdle);
      }
      startIdle();
      return undefined;
    };

    let removeLoad: (() => void) | undefined;

    if (deferUntilVisible && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            observer?.disconnect();
            removeLoad = afterGates() ?? undefined;
          }
        },
        { rootMargin: "80px 0px" },
      );
      observer.observe(node);
    } else {
      removeLoad = afterGates() ?? undefined;
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      removeLoad?.();
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [
    deferUntilVisible,
    deferUntilWindowLoad,
    deferUntilIdle,
    idleTimeoutMs,
  ]);

  return (
    <div ref={ref} className="h-full w-full">
      {ready ? <SoftAurora {...props} /> : <AuroraFallback />}
    </div>
  );
}

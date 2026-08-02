"use client";

import { useEffect, useRef } from "react";

type MarqueeProps = {
  items: string[];
  label?: string;
};

/**
 * CSS marquee with animation paused while offscreen so the compositor
 * isn't continuously updating a translateX track during page scroll.
 */
export default function Marquee({ items, label }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        track.style.animationPlayState = entry.isIntersecting
          ? "running"
          : "paused";
      },
      { rootMargin: "80px 0px" },
    );

    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {label ? (
        <p className="eyebrow mb-4 text-center text-mute">{label}</p>
      ) : null}

      <div className="marquee overflow-hidden">
        <div
          ref={trackRef}
          className="marquee-track flex w-max flex-nowrap gap-3"
        >
          {/* Two identical groups: first is read by AT, second is decorative */}
          {[0, 1].map((group) => (
            <ul
              key={group}
              className="flex flex-nowrap gap-3"
              aria-hidden={group === 1 ? true : undefined}
            >
              {items.map((item) => (
                <li
                  key={`${group}-${item}`}
                  className="whitespace-nowrap rounded-pill border border-ink/15 bg-canvas px-5 py-2 text-sm font-semibold text-ink shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { PropsWithChildren } from "react";

type HighlightProps = PropsWithChildren<{
  className?: string;
}>;

export function HeroHighlight({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-20 -translate-y-1/2 bg-primary/20 blur-3xl"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export function Highlight({ children, className = "" }: HighlightProps) {
  return (
    <span
      className={`rounded-[0.4em] bg-primary/25 px-2 py-0.5 text-inherit ${className}`}
    >
      {children}
    </span>
  );
}

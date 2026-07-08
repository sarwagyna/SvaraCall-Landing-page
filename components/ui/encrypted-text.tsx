"use client";

import { useEffect, useState } from "react";

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

export type EncryptedTextProps = {
  text: string;
  className?: string;
  revealDelayMs?: number;
  flipDelayMs?: number;
  charset?: string;
  encryptedClassName?: string;
  revealedClassName?: string;
};

function randomChar(charset: string) {
  return charset[Math.floor(Math.random() * charset.length)]!;
}

function scramble(text: string, charset: string): string[] {
  return text.split("").map((ch) => (ch === " " ? " " : randomChar(charset)));
}

/** Deterministic glyphs for SSR + first client paint (no Math.random). */
function placeholder(text: string): string[] {
  return text.split("").map((ch) => (ch === " " ? " " : "•"));
}

export function EncryptedText({
  text,
  className = "",
  revealDelayMs = 50,
  flipDelayMs = 50,
  charset = DEFAULT_CHARSET,
  encryptedClassName = "",
  revealedClassName = "",
}: EncryptedTextProps) {
  // Stay on the deterministic placeholder until after hydration so SSR HTML
  // and the client's first paint are identical (avoids scramble mismatch).
  const [hydrated, setHydrated] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);
  const [scrambled, setScrambled] = useState(() => placeholder(text));
  const complete = revealedCount >= text.length;

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    setRevealedCount(0);
    setScrambled(scramble(text, charset));
  }, [hydrated, text, charset]);

  useEffect(() => {
    if (!hydrated || complete) return;

    const id = window.setInterval(() => {
      setRevealedCount((count) => Math.min(count + 1, text.length));
    }, revealDelayMs);

    return () => window.clearInterval(id);
  }, [hydrated, text.length, revealDelayMs, complete]);

  useEffect(() => {
    if (!hydrated || complete) return;

    const id = window.setInterval(() => {
      setScrambled(scramble(text, charset));
    }, flipDelayMs);

    return () => window.clearInterval(id);
  }, [hydrated, text, charset, flipDelayMs, complete]);

  // Until hydrated, always paint the same placeholder as the server.
  const display = hydrated ? scrambled : placeholder(text);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline">
        {text.split("").map((ch, i) => {
          const revealed = hydrated && i < revealedCount;
          const char = revealed ? ch : (display[i] ?? "•");
          return (
            <span
              key={i}
              className={revealed ? revealedClassName : encryptedClassName}
              suppressHydrationWarning
            >
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
}

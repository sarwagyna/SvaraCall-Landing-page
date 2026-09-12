"use client";

import { useState } from "react";
import { site } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

type DemoCallFormProps = {
  variant?: "inline" | "stacked";
  theme?: "light" | "dark";
  inputId?: string;
  submitEvent?: string;
  size?: "default" | "compact";
};

export default function DemoCallForm({
  variant = "inline",
  theme = "light",
  inputId = "demo-phone",
  submitEvent = "demo_call_submitted",
  size = "default",
}: DemoCallFormProps) {
  const [digits, setDigits] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (digits.length !== 10) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    setError(null);

    const number = `+91 ${digits}`;
    const subject = "SvaraCall AI — demo call request";
    const body = [
      `Please place a demo call to ${number}.`,
      "",
      "Preferred language: Telugu / Hindi / English.",
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    trackEvent(submitEvent);
    setSubmitted(true);
  };

  const isDark = theme === "dark";
  const prefixClass = isDark
    ? "bg-white/10 text-white"
    : "bg-canvas-soft text-ink";
  const inputWrapClass = isDark
    ? "ring-white/20 focus-within:ring-primary"
    : "ring-ink/15 focus-within:ring-primary";
  const inputClass = isDark
    ? "bg-white/5 text-white placeholder:text-white/40"
    : "bg-canvas text-ink placeholder:text-mute";
  const errorClass = isDark ? "text-white/90" : "text-ink";
  const finePrintClass = isDark ? "text-white/50" : "text-mute";
  const isCompact = size === "compact";

  if (submitted) {
    return (
      <div className={variant === "inline" ? "mt-5" : "text-center"}>
        <p className={`text-sm font-semibold ${isDark ? "text-white" : "text-ink"}`}>
          We&apos;re on it — expect a demo call to{" "}
          <span className="text-primary">+91 {digits}</span> shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setDigits("");
          }}
          className="mt-2 text-sm font-semibold text-primary hover:underline"
        >
          Use a different number
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={isCompact && variant === "inline" ? "w-fit max-w-full" : undefined}
    >
      <div
        className={
          variant === "inline"
            ? `flex flex-row items-stretch ${isCompact ? "gap-2" : "gap-3"}`
            : isCompact
              ? "flex flex-row items-stretch gap-2"
              : "space-y-3"
        }
      >
        <div
          className={`flex items-stretch overflow-hidden rounded-input ring-1 ${inputWrapClass} focus-within:ring-2 ${
            isCompact && variant === "inline"
              ? "w-auto shrink-0"
              : "min-w-0 w-full flex-1"
          }`}
        >
          <span
            className={`grid shrink-0 place-items-center font-semibold ${prefixClass} ${
              isCompact ? "px-2.5 text-xs" : "px-4 text-sm"
            }`}
          >
            +91
          </span>
          <input
            id={inputId}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="63050 36991"
            value={digits}
            onChange={(e) => {
              setDigits(e.target.value.replace(/\D/g, "").slice(0, 10));
              if (error) setError(null);
            }}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className={`${
              isCompact
                ? variant === "inline"
                  ? "h-8 w-[9.5rem] px-2.5 text-sm"
                  : "h-8 w-full px-2.5 text-sm"
                : "h-12 w-full px-4"
            } outline-none ${inputClass}`}
          />
        </div>
        <button
          type="submit"
          className={`inline-flex shrink-0 items-center justify-center rounded-pill bg-primary font-semibold text-on-primary transition-colors hover:bg-primary-active ${
            isCompact ? "h-8 gap-1.5 px-3 text-xs" : "h-12 gap-2 text-base"
          } ${
            variant === "inline" || isCompact
              ? isCompact
                ? ""
                : "px-6 sm:px-8"
              : "w-full px-8"
          }`}
        >
          <svg
            width={isCompact ? 14 : 20}
            height={isCompact ? 14 : 20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 5 6a2 2 0 0 1 0-2z" />
          </svg>
          Get a demo call
        </button>
      </div>
      {error && (
        <p
          id={`${inputId}-error`}
          className={`mt-2 text-sm ${errorClass} ${
            isCompact && variant === "inline" ? "w-0 min-w-full text-center" : ""
          }`}
        >
          {error}
        </p>
      )}
      <p
        className={`mt-2 ${isCompact ? "text-[11px]" : "text-xs"} ${finePrintClass} ${
          isCompact && variant === "inline" ? "w-0 min-w-full text-center" : ""
        }`}
      >
        We&apos;ll only use your number to place this demo call.
      </p>
    </form>
  );
}

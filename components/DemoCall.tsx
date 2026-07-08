"use client";

import { useState } from "react";
import { site } from "@/lib/content";

export default function DemoCall() {
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
    setSubmitted(true);
  };

  return (
    <section id="demo-call" className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-primary">Live demo</p>
          <h2 className="display display-h2 mt-4 text-white">
            Get a demo call.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            Enter your number and SvaraCall will call you — in Telugu, Hindi, or
            English — so you can hear the AI agent hold a real conversation
            before you commit.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {["Telugu · Hindi · English", "Under 2 minutes", "No signup"].map(
              (chip) => (
                <li
                  key={chip}
                  className="rounded-pill bg-white/10 px-4 py-2 text-sm font-semibold text-white/80"
                >
                  {chip}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="rounded-card bg-white/5 p-7 ring-1 ring-white/10 md:p-8">
          {submitted ? (
            <div className="text-center">
              <span
                aria-hidden="true"
                className="mx-auto grid h-14 w-14 place-items-center rounded-pill bg-primary text-on-primary"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <h3 className="mt-5 text-xl font-bold text-white">
                We&apos;re on it.
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-white/70">
                Expect a demo call to{" "}
                <span className="font-semibold text-white">+91 {digits}</span>{" "}
                shortly. If your email app just opened, send the message so we
                can confirm your slot.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setDigits("");
                }}
                className="mt-6 text-sm font-semibold text-primary hover:underline"
              >
                Use a different number
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <label htmlFor="demo-phone" className="text-sm font-semibold text-white">
                Your mobile number
              </label>
              <div className="mt-2 flex items-stretch overflow-hidden rounded-input bg-white ring-1 ring-white/20 focus-within:ring-2 focus-within:ring-primary">
                <span className="grid place-items-center bg-canvas-soft px-4 text-sm font-semibold text-ink">
                  +91
                </span>
                <input
                  id="demo-phone"
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
                  aria-describedby={error ? "demo-phone-error" : undefined}
                  className="h-12 w-full bg-white px-4 text-ink outline-none placeholder:text-mute"
                />
              </div>
              {error && (
                <p id="demo-phone-error" className="mt-2 text-sm text-white/90">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
              >
                <svg
                  width="20"
                  height="20"
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
              <p className="mt-3 text-xs text-white/50">
                We&apos;ll only use your number to place this demo call.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

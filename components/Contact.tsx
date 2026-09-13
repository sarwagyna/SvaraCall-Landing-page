"use client";

import { useState } from "react";
import Link from "next/link";
import { site, industryPages, useCases } from "@/lib/content";

const callVolumes = [
  "Under 500 calls / month",
  "500 – 2,000 calls / month",
  "2,000 – 10,000 calls / month",
  "10,000+ calls / month",
] as const;

type ContactProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  submitLabel?: string;
  headingLevel?: 1 | 2;
  messageIntro?: string;
};

export default function Contact({
  id = "top",
  eyebrow = "Book a pilot",
  title = "Deploy your AI voice agent",
  description = "Fill out the form and we'll set up a pilot for your business — with a live demo call in Telugu, Hindi, or English.",
  submitLabel = "Book my pilot →",
  headingLevel = 1,
  messageIntro = "Hi SvaraCall AI, I'd like to book a pilot.",
}: ContactProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [callVolume, setCallVolume] = useState("");
  const [primaryUseCase, setPrimaryUseCase] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      messageIntro,
      "",
      `Full name: ${fullName}`,
      `Phone: ${phone}`,
      `Business: ${business || "—"}`,
      `Website / social: ${website || "—"}`,
      `Industry: ${industry || "—"}`,
      `Monthly call volume: ${callVolume || "—"}`,
      `Primary use case: ${primaryUseCase || "—"}`,
    ].join("\n");
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  const fieldClass =
    "mt-2 h-12 w-full rounded-input border border-canvas-soft bg-canvas px-4 text-ink outline-none focus-visible:ring-2 focus-visible:ring-primary";
  const labelClass = "text-sm font-semibold text-ink";

  return (
    <section id={id} className="scroll-mt-[calc(60px+2em)] bg-canvas-soft">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <div className="text-center">
          <p className="eyebrow">{eyebrow}</p>
          {headingLevel === 1 ? (
            <h1 className="display display-hero mt-4">{title}</h1>
          ) : (
            <h2 className="display display-hero mt-4">{title}</h2>
          )}
          <p className="mx-auto mt-5 max-w-xl text-lg text-body">
            {description}
          </p>
        </div>

        <div className="mt-10 rounded-card bg-canvas p-6 shadow-sm md:p-8">
          {submitted ? (
            <div className="py-6 text-center">
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
              <h2 className="display display-h2 mt-5">Almost there.</h2>
              <p className="mx-auto mt-3 max-w-md text-body">
                WhatsApp just opened with your details filled in — hit send and
                we&apos;ll confirm your pilot. We reply within one business day.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-ink-deep hover:underline"
              >
                Edit the form
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={fieldClass}
                    placeholder="Rahul Sharma"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={fieldClass}
                    placeholder="+91 90000 00000"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>

                <div>
                  <label htmlFor="business" className={labelClass}>
                    Business Name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    className={fieldClass}
                    placeholder="Your Company Name"
                    autoComplete="organization"
                  />
                </div>

                <div>
                  <label htmlFor="website" className={labelClass}>
                    Website or Social Link
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className={fieldClass}
                    placeholder="https://..."
                    autoComplete="url"
                    inputMode="url"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className={labelClass}>
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Select your industry
                    </option>
                    {industryPages.map((item) => (
                      <option key={item.slug} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="callVolume" className={labelClass}>
                    Monthly Call Volume
                  </label>
                  <select
                    id="callVolume"
                    name="callVolume"
                    value={callVolume}
                    onChange={(e) => setCallVolume(e.target.value)}
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Estimated calls / month
                    </option>
                    {callVolumes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="useCase" className={labelClass}>
                  Primary Use Case
                </label>
                <select
                  id="useCase"
                  name="useCase"
                  value={primaryUseCase}
                  onChange={(e) => setPrimaryUseCase(e.target.value)}
                  className={fieldClass}
                >
                  <option value="" disabled>
                    What do you need the AI to do?
                  </option>
                  {useCases.map((item) => (
                    <option key={item.title} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active"
              >
                {submitLabel}
              </button>
              <p className="text-sm text-mute">
                By booking a pilot you agree to our{" "}
                <Link href="/terms" className="text-ink-deep hover:underline">
                  Terms of Service
                </Link>
                ,{" "}
                <Link href="/privacy" className="text-ink-deep hover:underline">
                  Privacy Policy
                </Link>
                , and{" "}
                <Link href="/aup" className="text-ink-deep hover:underline">
                  Acceptable Use Policy
                </Link>
                .
              </p>
            </form>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-body">
          Prefer to reach us directly? Email{" "}
          <a
            href={`mailto:${site.email}?subject=SvaraCall%20AI%20pilot`}
            className="font-semibold text-ink-deep hover:underline"
          >
            {site.email}
          </a>
          {site.whatsapp ? (
            <>
              {" "}
              or message us on{" "}
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink-deep hover:underline"
              >
                WhatsApp
              </a>
            </>
          ) : null}
          .
        </p>
      </div>
    </section>
  );
}

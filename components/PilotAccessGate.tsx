"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { PILOT_ACCESS_DIGEST, PILOT_ACCESS_URL } from "@/lib/launch";
import { sha256Hex } from "@/lib/sha256";

function digestEqual(left: string, right: string) {
  if (left.length !== right.length) return false;
  let mismatch = 0;
  for (let i = 0; i < left.length; i++) {
    mismatch |= left.charCodeAt(i) ^ right.charCodeAt(i);
  }
  return mismatch === 0;
}

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

type PilotAccessGateProps = {
  destinationUrl?: string;
  className?: string;
};

export default function PilotAccessGate({
  destinationUrl = PILOT_ACCESS_URL,
  className = "",
}: PilotAccessGateProps) {
  const router = useRouter();
  const inputId = useId();
  const errorId = useId();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "checking" | "opening">(
    "idle",
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status !== "idle") return;

    setError(null);
    setStatus("checking");

    const submitted = value;
    const accepted = digestEqual(sha256Hex(submitted), PILOT_ACCESS_DIGEST);

    if (!accepted) {
      setStatus("idle");
      setError("Invalid pilot access password.");
      return;
    }

    setStatus("opening");
    setValue("");

    if (isExternalUrl(destinationUrl)) {
      window.location.assign(destinationUrl);
      return;
    }

    router.push(destinationUrl);
  };

  const busy = status !== "idle";

  return (
    <div
      className={`rounded-card bg-[#101916]/80 p-6 shadow-sm ring-1 ring-white/10 backdrop-blur-sm md:p-8 ${className}`}
    >
      <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
        <div>
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-white"
          >
            Pilot Access Password
          </label>
          <input
            id={inputId}
            name="pilot-access"
            type="password"
            autoComplete="off"
            spellCheck={false}
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              if (error) setError(null);
            }}
            disabled={busy}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : undefined}
            className="mt-2 h-12 w-full rounded-input border border-white/10 bg-canvas px-4 text-ink outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-60"
          />
        </div>

        {error ? (
          <p
            id={errorId}
            role="alert"
            className="text-sm font-semibold text-[#f0b4b4]"
          >
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={busy}
          className="inline-flex h-12 items-center justify-center rounded-pill bg-primary px-8 text-base font-semibold text-on-primary transition-colors hover:bg-primary-active disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "opening" ? "Opening pilot access…" : "Enter Pilot Access"}
        </button>
      </form>
      <p className="mt-4 text-xs leading-relaxed text-white/45">
        This is a campaign access gate, not account authentication. Your
        SvaraCall workspace still uses its own sign-in.
      </p>
    </div>
  );
}

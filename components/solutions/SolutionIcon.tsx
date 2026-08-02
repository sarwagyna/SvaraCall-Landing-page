import type { ReactNode } from "react";
import type { SolutionTone } from "@/lib/solutions";

const icons: Record<string, ReactNode> = {
  "lead-follow-up": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5.5A2.5 2.5 0 015.5 3h2.1c.5 0 .95.3 1.15.75l1.1 2.5a1.25 1.25 0 01-.3 1.4L8.3 9a12.5 12.5 0 006.7 6.7l1.35-1.25a1.25 1.25 0 011.4-.3l2.5 1.1c.45.2.75.65.75 1.15v2.1A2.5 2.5 0 0118.5 21C10.5 21 3.5 14 3.5 6V5.5z"
    />
  ),
  "lead-qualification": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.5-1.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z"
    />
  ),
  "appointment-booking": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 3v2m8-2v2M4.5 8h15M6 5.5h12A1.5 1.5 0 0119.5 7v12a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 19V7A1.5 1.5 0 016 5.5z"
    />
  ),
  "win-back": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 12a8 8 0 0113.66-5.66M20 4v5h-5M20 12a8 8 0 01-13.66 5.66M4 20v-5h5"
    />
  ),
  "event-reminders": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l2.5 2.5M12 3a9 9 0 100 18 9 9 0 000-18z"
    />
  ),
  surveys: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 8h8M8 12h5M7 4h10a2 2 0 012 2v14l-3.5-2L12 20l-3.5-2L5 20V6a2 2 0 012-2z"
    />
  ),
  "appointment-reminders": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 17h5l-1.4-1.4A6.5 6.5 0 0018 11.5V10a6 6 0 10-12 0v1.5a6.5 6.5 0 00-.6 4.1L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  ),
  "no-show-recovery": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v5m0 3h.01M4.93 19h14.14A2 2 0 0021 16.93L13.07 4a2 2 0 00-3.46 0L2 16.93A2 2 0 004.93 19z"
    />
  ),
  "order-updates": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 7h16l-1.5 10.5A2 2 0 0116.52 19H7.48a2 2 0 01-1.98-1.5L4 7zm4-3h8l1 3H7l1-3z"
    />
  ),
  "payment-reminders": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8c-1.66 0-3 .9-3 2s1.34 2 3 2 3 .9 3 2-1.34 2-3 2m0-8V6m0 12v-2M5 6h14v12H5V6z"
    />
  ),
  "crm-logging": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h10M4 18h16M16 10l2 2 4-4"
    />
  ),
  "data-collection": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h4M8 4h8l1 2h3v14H4V6h3l1-2z"
    />
  ),
  escalation: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 11a4 4 0 10-8 0 4 4 0 008 0zM4 20a8 8 0 0116 0M18 8l3-3m0 0l-3-3m3 3h-4"
    />
  ),
  compliance: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
    />
  ),
};

export function SolutionIcon({
  id,
  className = "h-7 w-7",
}: {
  id: string;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      {icons[id] ?? icons["lead-follow-up"]}
    </svg>
  );
}

export function toneClasses(tone: SolutionTone) {
  switch (tone) {
    case "deep":
      return {
        card: "bg-[#163300] text-white ring-1 ring-white/5",
        title: "text-white",
        body: "text-white/70",
        icon: "text-primary",
      };
    case "mid":
      return {
        card: "bg-[#1e4a1a] text-white ring-1 ring-white/5",
        title: "text-white",
        body: "text-white/70",
        icon: "text-primary-active",
      };
    case "pale":
      return {
        card: "bg-[#c5edab] text-[#09100b] ring-1 ring-black/5",
        title: "text-[#09100b]",
        body: "text-[#09100b]/70",
        icon: "text-[#163300]",
      };
  }
}

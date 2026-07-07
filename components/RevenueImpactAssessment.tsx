"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import { bookPilotHref } from "@/lib/nav";

/* -------------------------------------------------------------------------- */
/*  Icons (inline SVG, stroke = currentColor)                                  */
/* -------------------------------------------------------------------------- */

type IconProps = { className?: string };

function Svg({ children, className = "h-5 w-5" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const IconHealthcare = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </Svg>
);
const IconRealEstate = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
  </Svg>
);
const IconEducation = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5" />
  </Svg>
);
const IconAutomotive = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="16.5" cy="16.5" r="2.5" />
  </Svg>
);
const IconFinance = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M6 12h.01M18 12h.01" />
  </Svg>
);
const IconRetail = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </Svg>
);
const IconBpo = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
    <path d="M21 15a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2z" />
    <path d="M3 15a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z" />
  </Svg>
);
const IconOther = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </Svg>
);
const IconPhone = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </Svg>
);
const IconChat = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
  </Svg>
);
const IconMail = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 5L2 7" />
  </Svg>
);
const IconTeam = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Svg>
);
const IconCrm = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
  </Svg>
);
const IconCombination = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M16 3h5v5" />
    <path d="M4 20 21 3" />
    <path d="M21 16v5h-5" />
    <path d="m15 15 6 6" />
    <path d="m4 4 5 5" />
  </Svg>
);
const IconClock = ({ className }: IconProps) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);

/* -------------------------------------------------------------------------- */
/*  Static config                                                              */
/* -------------------------------------------------------------------------- */

const AI_RESPONSE_TIME = "8 seconds";
const CAPTURE_RATE = 0.82; // AI captures ~82% of the recoverable opportunity
const MINUTES_PER_LEAD = 18; // manual handling time per lead
const AUTOMATION_SHARE = 0.85;

type IndustryId =
  | "healthcare"
  | "realestate"
  | "education"
  | "automotive"
  | "finance"
  | "retail"
  | "bpo"
  | "other";

type Industry = {
  id: IndustryId;
  Icon: ComponentType<IconProps>;
  label: string;
  lostLabel: string; // e.g. "Missed patient appointments"
  gainNoun: string; // e.g. "patients"
};

const INDUSTRIES: Industry[] = [
  { id: "healthcare", Icon: IconHealthcare, label: "Healthcare", lostLabel: "Missed patient appointments", gainNoun: "patients" },
  { id: "realestate", Icon: IconRealEstate, label: "Real Estate", lostLabel: "Property enquiries lost", gainNoun: "closings" },
  { id: "education", Icon: IconEducation, label: "Education", lostLabel: "Admissions lost", gainNoun: "students" },
  { id: "automotive", Icon: IconAutomotive, label: "Automotive", lostLabel: "Test drives missed", gainNoun: "buyers" },
  { id: "finance", Icon: IconFinance, label: "Finance", lostLabel: "Policies & applications missed", gainNoun: "clients" },
  { id: "retail", Icon: IconRetail, label: "Retail", lostLabel: "Orders lost", gainNoun: "customers" },
  { id: "bpo", Icon: IconBpo, label: "BPO", lostLabel: "Conversations missed", gainNoun: "customers" },
  { id: "other", Icon: IconOther, label: "Other", lostLabel: "Opportunities lost", gainNoun: "customers" },
];

const LEAD_STEPS = [50, 100, 250, 500, 1000, 5000, 10000];
const AGENT_STEPS = [1, 2, 5, 10, 20, 50];

const CHANNELS: { id: string; Icon: ComponentType<IconProps>; label: string }[] = [
  { id: "phone", Icon: IconPhone, label: "Phone calls" },
  { id: "whatsapp", Icon: IconChat, label: "WhatsApp" },
  { id: "email", Icon: IconMail, label: "Email" },
  { id: "salesteam", Icon: IconTeam, label: "Sales team" },
  { id: "crm", Icon: IconCrm, label: "CRM" },
  { id: "combination", Icon: IconCombination, label: "Combination" },
];

type ResponseOption = {
  id: string;
  label: string;
  risk: number; // index into RISK_LEVELS
  uplift: number; // conversion multiplier if response were instant
};

const RESPONSE_OPTIONS: ResponseOption[] = [
  { id: "5min", label: "Within 5 minutes", risk: 0, uplift: 1.1 },
  { id: "15min", label: "15 minutes", risk: 1, uplift: 1.25 },
  { id: "30min", label: "30 minutes", risk: 2, uplift: 1.45 },
  { id: "1hr", label: "1 hour", risk: 2, uplift: 1.75 },
  { id: "2hr", label: "2 hours", risk: 3, uplift: 2.1 },
  { id: "sameday", label: "Same day", risk: 3, uplift: 2.6 },
  { id: "nextday", label: "Next day", risk: 4, uplift: 3.0 },
];

const RISK_LEVELS = [
  { name: "Excellent", color: "#2ead4b" },
  { name: "Good", color: "#9fe870" },
  { name: "Average", color: "#f5c451" },
  { name: "High", color: "#f39a3e" },
  { name: "Critical", color: "#e5484d" },
];

const REVENUE_OPTIONS = [
  { value: 5000, label: "₹5,000" },
  { value: 10000, label: "₹10,000" },
  { value: 25000, label: "₹25,000" },
  { value: 50000, label: "₹50,000" },
  { value: 100000, label: "₹1L" },
];

const CLOSE_OPTIONS = [2, 5, 10, 20, 30];

const ANALYZING_MESSAGES = [
  "Analyzing your responses…",
  "Checking response efficiency…",
  "Calculating lost opportunities…",
  "Comparing industry benchmarks…",
];

const STEP_TITLES = [
  "Tell us about your business",
  "How do you handle leads today?",
  "How quickly do you respond?",
  "What's each customer worth?",
  "Your Revenue Impact Report",
];

/* -------------------------------------------------------------------------- */
/*  Formatting                                                                 */
/* -------------------------------------------------------------------------- */

const nf = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

function moneyLakh(n: number) {
  const v = Math.max(0, n);
  if (v >= 1_00_00_000) return `₹${(v / 1_00_00_000).toFixed(2)} Cr`;
  if (v >= 1_00_000) return `₹${(v / 1_00_000).toFixed(2)} Lakhs`;
  return `₹${nf.format(Math.round(v))}`;
}

/* -------------------------------------------------------------------------- */
/*  Count-up hook                                                              */
/* -------------------------------------------------------------------------- */

function useCountUp(value: number, active: boolean, durationMs = 1100) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // Snap to the final value on the next frame (avoids a synchronous
      // setState inside the effect body).
      const id = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(id);
    }
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, active, durationMs]);

  return display;
}

/* -------------------------------------------------------------------------- */
/*  Reusable UI                                                                */
/* -------------------------------------------------------------------------- */

function ChoiceCard({
  selected,
  onClick,
  icon,
  children,
  className = "",
}: {
  selected: boolean;
  onClick: () => void;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`group flex items-center gap-3 rounded-2xl px-4 py-3.5 text-left ring-1 transition-all duration-200 ${
        selected
          ? "bg-primary text-on-primary ring-primary shadow-[0_0_0_4px_rgba(159,232,112,0.15)]"
          : "bg-white/[0.04] text-white ring-white/10 hover:bg-white/[0.07] hover:ring-white/25"
      } ${className}`}
    >
      {icon ? (
        <span className={selected ? "text-on-primary" : "text-primary"}>{icon}</span>
      ) : null}
      <span className="text-sm font-semibold">{children}</span>
    </button>
  );
}

function SteppedSlider({
  steps,
  index,
  onChange,
  format,
  ariaLabel,
}: {
  steps: number[];
  index: number;
  onChange: (i: number) => void;
  format: (v: number) => string;
  ariaLabel: string;
}) {
  const pct = (index / (steps.length - 1)) * 100;
  return (
    <div>
      <div className="mb-4 text-center">
        <span className="tabular text-4xl font-black text-primary">
          {format(steps[index])}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={steps.length - 1}
        step={1}
        value={index}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        aria-label={ariaLabel}
        aria-valuetext={format(steps[index])}
        className="roi-range h-1.5 w-full cursor-pointer appearance-none rounded-pill"
        style={{
          background: `linear-gradient(to right, var(--color-primary) ${pct}%, rgba(255,255,255,0.14) ${pct}%)`,
        }}
      />
      <div className="mt-2 flex justify-between text-[11px] text-white/35">
        {steps.map((s) => (
          <span key={s}>{format(s)}</span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Report metric row                                                          */
/* -------------------------------------------------------------------------- */

function MetricRow({
  label,
  value,
  accent = false,
  delayMs = 0,
}: {
  label: string;
  value: string;
  accent?: boolean;
  delayMs?: number;
}) {
  return (
    <div
      className="reveal is-visible flex items-center justify-between gap-4 rounded-2xl bg-white/[0.04] px-5 py-4 ring-1 ring-white/10"
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <span className="text-sm text-white/60">{label}</span>
      <span className={`tabular text-lg font-black ${accent ? "text-primary" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main component                                                             */
/* -------------------------------------------------------------------------- */

export default function RevenueImpactAssessment() {
  const [step, setStep] = useState(0);

  // Answers
  const [industry, setIndustry] = useState<IndustryId | null>(null);
  const [leadIdx, setLeadIdx] = useState(4); // 1000
  const [channel, setChannel] = useState<string | null>(null);
  const [agentIdx, setAgentIdx] = useState(2); // 5
  const [responseId, setResponseId] = useState<string | null>(null);
  const [revenue, setRevenue] = useState<number | null>(null);
  const [customRevenue, setCustomRevenue] = useState<number>(25000);
  const [useCustomRevenue, setUseCustomRevenue] = useState(false);
  const [closeRate, setCloseRate] = useState<number | null>(null);

  // Report phase. `analyzing` starts true so the spinner shows immediately when
  // the report step mounts, without a synchronous reset inside an effect.
  const [analyzing, setAnalyzing] = useState(true);
  const [msgIdx, setMsgIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const industryData =
    INDUSTRIES.find((i) => i.id === industry) ?? INDUSTRIES[INDUSTRIES.length - 1];
  const responseData = RESPONSE_OPTIONS.find((r) => r.id === responseId) ?? null;
  const effectiveRevenue = useCustomRevenue ? customRevenue : revenue ?? 0;

  /* ---- calculations ---- */
  const results = useMemo(() => {
    const leads = LEAD_STEPS[leadIdx];
    const base = (closeRate ?? 0) / 100;
    const uplift = responseData?.uplift ?? 1;
    const improved = Math.min(base * uplift, 0.6);
    const extraRate = Math.max(improved - base, 0);

    const grossExtraCustomers = leads * extraRate;
    const monthlyLoss = grossExtraCustomers * effectiveRevenue;
    const revenueRecovery = monthlyLoss * CAPTURE_RATE;
    const additionalCustomers = Math.round(grossExtraCustomers * CAPTURE_RATE);
    const hoursSaved = Math.round((leads * MINUTES_PER_LEAD) / 60 * AUTOMATION_SHARE);
    const aiMonthlyCost = Math.max(15000, leads * 6);
    const roi = Math.round((revenueRecovery / aiMonthlyCost) * 100);

    return {
      leads,
      monthlyLoss,
      revenueRecovery,
      additionalCustomers,
      hoursSaved,
      roi,
    };
  }, [leadIdx, closeRate, responseData, effectiveRevenue]);

  /* ---- analyzing sequence on entering step 5 ---- */
  useEffect(() => {
    if (step !== 4) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      const id = requestAnimationFrame(() => {
        setAnalyzing(false);
        setRevealed(true);
      });
      return () => cancelAnimationFrame(id);
    }

    const interval = setInterval(() => {
      setMsgIdx((m) => Math.min(m + 1, ANALYZING_MESSAGES.length - 1));
    }, 550);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setAnalyzing(false);
      setRevealed(true);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [step]);

  /* ---- step validity ---- */
  const canContinue = (() => {
    switch (step) {
      case 0:
        return industry !== null;
      case 1:
        return channel !== null;
      case 2:
        return responseId !== null;
      case 3:
        return (useCustomRevenue ? customRevenue > 0 : revenue !== null) && closeRate !== null;
      default:
        return true;
    }
  })();

  const goNext = () => setStep((s) => Math.min(s + 1, 4));
  const goBack = () => setStep((s) => Math.max(s - 1, 0));
  const restart = () => {
    setStep(0);
    setIndustry(null);
    setChannel(null);
    setResponseId(null);
    setRevenue(null);
    setUseCustomRevenue(false);
    setCloseRate(null);
    setLeadIdx(4);
    setAgentIdx(2);
    setAnalyzing(true);
    setMsgIdx(0);
    setRevealed(false);
  };

  const progressPct = ((step + (revealed ? 1 : 0)) / 5) * 100;

  return (
    <section id="revenue-impact-assessment" className="bg-ink">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        {/* Header */}
        <div className="text-center">
          <span className="eyebrow text-primary">AI Revenue Impact Assessment</span>
          <h2 className="display display-h2 mt-3 text-white">
            {STEP_TITLES[step]}
          </h2>
          <p className="mt-3 text-sm text-white/50">
            {step < 4 ? (
              <>
                Step {step + 1} of 5 · Estimated time:{" "}
                <span className="text-white/70">60 seconds</span>
              </>
            ) : (
              "Personalized to your answers"
            )}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mx-auto mt-6 h-1.5 max-w-md overflow-hidden rounded-pill bg-white/10">
          <div
            className="h-full rounded-pill bg-primary transition-[width] duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Card */}
        <div className="mt-8 rounded-card bg-white/[0.03] p-6 ring-1 ring-white/10 md:p-8">
          {/* STEP 1 — Business profile */}
          {step === 0 && (
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white/70">
                  What industry are you in?
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {INDUSTRIES.map((ind) => (
                    <ChoiceCard
                      key={ind.id}
                      selected={industry === ind.id}
                      onClick={() => setIndustry(ind.id)}
                      icon={<ind.Icon className="h-5 w-5" />}
                      className="flex-col !items-start"
                    >
                      {ind.label}
                    </ChoiceCard>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white/70">
                  How many leads do you receive every month?
                </h3>
                <SteppedSlider
                  steps={LEAD_STEPS}
                  index={leadIdx}
                  onChange={setLeadIdx}
                  ariaLabel="Monthly leads"
                  format={(v) =>
                    v >= 10000 ? "10,000+" : nf.format(v)
                  }
                />
              </div>
            </div>
          )}

          {/* STEP 2 — Sales process */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white/70">
                  How do you respond to new leads?
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {CHANNELS.map((c) => (
                    <ChoiceCard
                      key={c.id}
                      selected={channel === c.id}
                      onClick={() => setChannel(c.id)}
                      icon={<c.Icon className="h-5 w-5" />}
                    >
                      {c.label}
                    </ChoiceCard>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white/70">
                  How many sales agents do you have?
                </h3>
                <SteppedSlider
                  steps={AGENT_STEPS}
                  index={agentIdx}
                  onChange={setAgentIdx}
                  ariaLabel="Number of sales agents"
                  format={(v) => `${v}`}
                />
              </div>
            </div>
          )}

          {/* STEP 3 — Response time */}
          {step === 2 && (
            <div className="space-y-6">
              <p className="text-center text-sm text-white/60">
                This is the biggest driver of lost revenue. How long does it usually
                take to contact a new lead?
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {RESPONSE_OPTIONS.map((r) => (
                  <ChoiceCard
                    key={r.id}
                    selected={responseId === r.id}
                    onClick={() => setResponseId(r.id)}
                    icon={<IconClock className="h-5 w-5" />}
                  >
                    {r.label}
                  </ChoiceCard>
                ))}
              </div>

              {responseData && (
                <div className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Selected</span>
                    <span className="font-semibold text-white">{responseData.label}</span>
                  </div>
                  <div className="mt-3 h-2.5 w-full overflow-hidden rounded-pill bg-white/10">
                    <div
                      className="h-full rounded-pill transition-[width] duration-700 ease-out"
                      style={{
                        width: `${((responseData.risk + 1) / RISK_LEVELS.length) * 100}%`,
                        background: RISK_LEVELS[responseData.risk].color,
                      }}
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {RISK_LEVELS.map((lvl, i) => (
                        <span
                          key={lvl.name}
                          className={`rounded-pill px-2 py-0.5 text-[11px] font-semibold transition-colors ${
                            i === responseData.risk ? "text-ink" : "text-white/35"
                          }`}
                          style={
                            i === responseData.risk
                              ? { background: lvl.color }
                              : undefined
                          }
                        >
                          {lvl.name}
                        </span>
                      ))}
                    </div>
                    <span
                      className="text-sm font-black"
                      style={{ color: RISK_LEVELS[responseData.risk].color }}
                    >
                      {RISK_LEVELS[responseData.risk].name} risk
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 4 — Revenue */}
          {step === 3 && (
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white/70">
                  Average revenue from one customer
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {REVENUE_OPTIONS.map((r) => (
                    <ChoiceCard
                      key={r.value}
                      selected={!useCustomRevenue && revenue === r.value}
                      onClick={() => {
                        setRevenue(r.value);
                        setUseCustomRevenue(false);
                      }}
                    >
                      {r.label}
                    </ChoiceCard>
                  ))}
                  <ChoiceCard
                    selected={useCustomRevenue}
                    onClick={() => setUseCustomRevenue(true)}
                  >
                    Custom
                  </ChoiceCard>
                </div>
                {useCustomRevenue && (
                  <div className="mt-3 flex items-center gap-2 rounded-input bg-white/5 px-3 py-2 ring-1 ring-white/10 focus-within:ring-primary/60">
                    <span className="text-sm text-white/50">₹</span>
                    <input
                      type="number"
                      min={100}
                      step={100}
                      value={customRevenue}
                      onChange={(e) =>
                        setCustomRevenue(Math.max(0, parseInt(e.target.value, 10) || 0))
                      }
                      aria-label="Custom revenue per customer"
                      className="tabular w-full bg-transparent text-sm font-semibold text-white outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                )}
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white/70">
                  Out of every 100 leads, how many become customers?
                </h3>
                <div className="grid grid-cols-5 gap-3">
                  {CLOSE_OPTIONS.map((c) => (
                    <ChoiceCard
                      key={c}
                      selected={closeRate === c}
                      onClick={() => setCloseRate(c)}
                      className="!justify-center"
                    >
                      {c}
                    </ChoiceCard>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 5 — Report */}
          {step === 4 && (
            <div>
              {analyzing && !revealed && (
                <div className="flex flex-col items-center py-10 text-center" aria-live="polite">
                  <div className="relative h-16 w-16">
                    <span className="absolute inset-0 rounded-full border-2 border-white/10" />
                    <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary motion-reduce:animate-none" />
                  </div>
                  <p className="mt-6 text-lg font-semibold text-white">
                    {ANALYZING_MESSAGES[msgIdx]}
                  </p>
                  <p className="mt-2 text-sm text-white/40">Building your personalized report</p>
                </div>
              )}

              {revealed && (
                <Report
                  results={results}
                  industry={industryData}
                  currentResponse={responseData?.label ?? "—"}
                />
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        {step < 4 && (
          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="text-sm font-semibold text-white/50 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canContinue}
              className="inline-flex h-11 items-center rounded-pill bg-primary px-7 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active disabled:cursor-not-allowed disabled:opacity-40"
            >
              {step === 3 ? "See my report →" : "Continue →"}
            </button>
          </div>
        )}

        {step === 4 && revealed && (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={restart}
              className="text-sm font-semibold text-white/50 transition-colors hover:text-white"
            >
              ↺ Start over
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Report                                                                     */
/* -------------------------------------------------------------------------- */

function Report({
  results,
  industry,
  currentResponse,
}: {
  results: {
    monthlyLoss: number;
    revenueRecovery: number;
    additionalCustomers: number;
    hoursSaved: number;
    roi: number;
  };
  industry: Industry;
  currentResponse: string;
}) {
  const loss = useCountUp(results.monthlyLoss, true, 1300);

  return (
    <div className="space-y-6">
      {/* Headline */}
      <div className="reveal is-visible rounded-card bg-gradient-to-br from-[#e5484d]/15 to-transparent p-6 text-center ring-1 ring-[#e5484d]/25">
        <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
          Your business could be losing
        </p>
        <p className="tabular mt-2 text-5xl font-black text-[#ff6b6f] md:text-6xl">
          {moneyLakh(loss)}
        </p>
        <p className="mt-1 text-base font-semibold text-white/70">every month</p>
        <p className="mt-3 text-sm text-white/50">
          Largely from <span className="text-white/80">{industry.lostLabel.toLowerCase()}</span>{" "}
          due to slow lead response.
        </p>
      </div>

      {/* Response time before/after */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white/[0.04] p-5 text-center ring-1 ring-white/10">
          <p className="text-xs uppercase tracking-wider text-white/45">Current response</p>
          <p className="mt-2 text-2xl font-black text-white">{currentResponse}</p>
        </div>
        <div className="rounded-2xl bg-primary/10 p-5 text-center ring-1 ring-primary/30">
          <p className="text-xs uppercase tracking-wider text-primary/80">AI response</p>
          <p className="mt-2 text-2xl font-black text-primary">{AI_RESPONSE_TIME}</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="space-y-3">
        <MetricRow label="Potential revenue recovery" value={moneyLakh(results.revenueRecovery)} accent delayMs={60} />
        <MetricRow
          label={`Additional ${industry.gainNoun} / month`}
          value={`+${results.additionalCustomers}`}
          delayMs={120}
        />
        <MetricRow label="Hours saved / month" value={`${nf.format(results.hoursSaved)} hrs`} delayMs={180} />
        <MetricRow label="Estimated ROI" value={`${nf.format(results.roi)}%`} accent delayMs={240} />
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-card bg-gradient-to-br from-primary to-primary-active p-8 text-center">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl"
        />
        <div className="relative">
          <h3 className="display text-2xl text-on-primary md:text-3xl">
            Want to see exactly how AI would work for YOUR business?
          </h3>
          <div className="mt-6 flex justify-center">
            <Link
              href={bookPilotHref}
              className="inline-flex h-12 items-center justify-center rounded-pill bg-ink px-8 text-base font-semibold text-white transition-colors hover:bg-ink-deep"
            >
              Book free demo
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs font-semibold text-on-primary/70">
            <span>No credit card required</span>
            <span aria-hidden="true">·</span>
            <span>15 minutes</span>
            <span aria-hidden="true">·</span>
            <span>Personalized AI workflow</span>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-white/35">
        Estimates based on your inputs and lead-response benchmarks. Actual results
        vary by campaign, contacts, and industry.
      </p>
    </div>
  );
}

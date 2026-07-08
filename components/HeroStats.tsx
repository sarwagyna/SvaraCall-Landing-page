type Trend = "up" | "down";

const stats: { value: string; label: string; trend: Trend }[] = [
  { value: "100 T+", label: "AI Calls Daily", trend: "up" },
  { value: "90%", label: "Lead Connectivity", trend: "up" },
  { value: "40%", label: "More Conversions", trend: "up" },
  { value: "3x", label: "Lower CAC", trend: "down" },
];

function TrendArrow({ trend }: { trend: Trend }) {
  const className = "h-4 w-4 shrink-0 text-positive";

  if (trend === "down") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

export default function HeroStats() {
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-6 pt-4 sm:gap-x-6 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <div className="flex items-center justify-center gap-1.5">
              <span className="display text-2xl text-white md:text-3xl">
                {stat.value}
              </span>
              <TrendArrow trend={stat.trend} />
            </div>
            <p className="mt-1.5 text-sm font-medium text-white/65">{stat.label}</p>
          </dd>
        </div>
      ))}
    </dl>
  );
}

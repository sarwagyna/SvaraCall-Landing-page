import { dashboardCalls } from "@/lib/content";

const summary = [
  { label: "Calls today", value: "128" },
  { label: "Confirmed", value: "74" },
  { label: "Rescheduled", value: "31" },
  { label: "Escalated", value: "9" },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="display display-h2 max-w-3xl">
          See every call on one dashboard.
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-body">
          Every SvaraCall lands as a row you can act on — the outcome, a
          recording, and a full transcript, in the customer&apos;s language.
        </p>

        {/* Dashboard mockup (styled markup, not an image) */}
        <div className="mt-10 rounded-card bg-ink p-4 shadow-2xl shadow-ink/20 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-pill bg-primary text-on-primary text-xs font-[900]">
                S
              </span>
              <span className="text-sm font-semibold text-white">
                SvaraCall dashboard
              </span>
            </div>
            <span className="tabular text-xs text-white/50">
              Today · all campaigns
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {summary.map((s) => (
              <div key={s.label} className="rounded-input bg-white/5 px-4 py-3">
                <p className="tabular text-2xl font-bold text-white">
                  {s.value}
                </p>
                <p className="mt-0.5 text-xs text-white/50">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[620px] border-separate border-spacing-0 text-left">
              <caption className="sr-only">
                Sample SvaraCall dashboard call log
              </caption>
              <thead>
                <tr className="text-xs uppercase tracking-wider text-white/40">
                  <th scope="col" className="px-4 py-2 font-semibold">
                    Contact
                  </th>
                  <th scope="col" className="px-4 py-2 font-semibold">
                    Purpose
                  </th>
                  <th scope="col" className="px-4 py-2 font-semibold">
                    Language
                  </th>
                  <th scope="col" className="px-4 py-2 font-semibold">
                    Outcome
                  </th>
                  <th scope="col" className="px-4 py-2 font-semibold">
                    Duration
                  </th>
                  <th scope="col" className="px-4 py-2 font-semibold">
                    Log
                  </th>
                </tr>
              </thead>
              <tbody>
                {dashboardCalls.map((call) => (
                  <tr key={call.name} className="text-sm">
                    <th
                      scope="row"
                      className="border-t border-white/10 px-4 py-3 text-left font-semibold text-white"
                    >
                      {call.name}
                    </th>
                    <td className="border-t border-white/10 px-4 py-3 text-white/70">
                      {call.purpose}
                    </td>
                    <td className="border-t border-white/10 px-4 py-3 text-white/70">
                      {call.language}
                    </td>
                    <td className="border-t border-white/10 px-4 py-3">
                      <span
                        className={`inline-flex rounded-pill px-2.5 py-1 text-xs font-semibold ${
                          call.tone === "positive"
                            ? "bg-positive/20 text-primary"
                            : "bg-white/10 text-white/70"
                        }`}
                      >
                        {call.outcome}
                      </span>
                    </td>
                    <td className="tabular border-t border-white/10 px-4 py-3 text-white/60">
                      {call.duration}
                    </td>
                    <td className="border-t border-white/10 px-4 py-3 text-white/50">
                      <span className="text-xs">Recording · Transcript</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

import { comparison } from "@/lib/content";

const outcomeStrip = [
  {
    title: "Outcome-driven pricing",
    body: "You pay for calls that convert, not headcount.",
  },
  {
    title: "A human when it matters",
    body: "Complex calls escalate to your team.",
  },
  {
    title: "Every call accountable",
    body: "Outcome, recording, and transcript logged.",
  },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="bg-canvas">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <h2 className="display display-h2 max-w-3xl">
          More calls, better outcomes, far less cost.
        </h2>

        <div className="mt-12 overflow-x-auto rounded-card bg-[#0b1110] p-1">
          <table className="w-full min-w-[560px] border-separate border-spacing-0 text-left">
            <caption className="sr-only">
              SvaraCall AI compared with traditional calling
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="rounded-tl-card border-b border-white/10 bg-[#121b18] px-6 py-5 text-sm font-semibold uppercase tracking-wider text-white/70"
                >
                  Capability
                </th>
                <th
                  scope="col"
                  className="border-b border-white/10 bg-[#16221d] px-6 py-5 text-center text-base font-bold text-white"
                >
                  SvaraCall AI
                </th>
                <th
                  scope="col"
                  className="rounded-tr-card border-b border-white/10 bg-[#121b18] px-6 py-5 text-center text-sm font-semibold uppercase tracking-wider text-white/70"
                >
                  Traditional calling
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => {
                const last = i === comparison.length - 1;
                return (
                  <tr key={row.capability}>
                    <th
                      scope="row"
                      className={`bg-[#121b18] px-6 py-5 text-sm font-semibold text-white ${last ? "rounded-bl-card" : "border-b border-white/10"}`}
                    >
                      {row.capability}
                    </th>
                    <td
                      className={`bg-[#16221d] px-6 py-5 text-center text-sm font-semibold text-primary ${last ? "" : "border-b border-white/10"}`}
                    >
                      {row.svaracall}
                    </td>
                    <td
                      className={`bg-[#121b18] px-6 py-5 text-center text-sm text-white/70 ${last ? "rounded-br-card" : "border-b border-white/10"}`}
                    >
                      {row.traditional}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {outcomeStrip.map((item) => (
            <li
              key={item.title}
              className="rounded-card bg-canvas-soft p-6"
            >
              <h3 className="text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-body">{item.body}</p>
            </li>
          ))}
        </ul>

        {/* TODO: enable when first pilot numbers are available — social proof belongs here
        <div className="mt-10 rounded-card bg-canvas-soft p-8 text-center">
          <p className="eyebrow">Pilot traction</p>
          <p className="mt-4 text-body">Client logos, stats, and testimonial placeholder.</p>
        </div>
        */}
      </div>
    </section>
  );
}

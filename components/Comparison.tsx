import Link from "next/link";
import { comparison } from "@/lib/content";
import { bookPilotHref } from "@/lib/nav";

export default function Comparison() {
  return (
    <section id="comparison" className="bg-ink">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="display display-h2 text-white">
            More calls, better outcomes, far less cost
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            SvaraCall AI handles routine outbound calling at a scale and
            consistency a manual calling team can&apos;t match — at a fraction of
            the cost, with premium quality on every call.
          </p>
          <Link
            href={bookPilotHref}
            className="mt-6 inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active"
          >
            Book a pilot →
          </Link>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-separate border-spacing-0 text-left">
            <caption className="sr-only">
              SvaraCall AI compared with traditional calling
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="rounded-tl-card border-b border-white/10 bg-white/5 px-6 py-5 text-sm font-semibold uppercase tracking-wider text-white/50"
                >
                  Capability
                </th>
                <th
                  scope="col"
                  className="border-b border-white/10 bg-white/10 px-6 py-5 text-center text-base font-bold text-white"
                >
                  SvaraCall AI
                </th>
                <th
                  scope="col"
                  className="rounded-tr-card border-b border-white/10 bg-white/5 px-6 py-5 text-center text-sm font-semibold uppercase tracking-wider text-white/40"
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
                      className={`bg-white/5 px-6 py-5 text-sm font-semibold text-white ${last ? "rounded-bl-card" : "border-b border-white/10"}`}
                    >
                      {row.capability}
                    </th>
                    <td
                      className={`bg-white/10 px-6 py-5 text-center text-sm font-semibold text-primary ${last ? "" : "border-b border-white/10"}`}
                    >
                      {row.svaracall}
                    </td>
                    <td
                      className={`bg-white/5 px-6 py-5 text-center text-sm text-white/40 ${last ? "rounded-br-card" : "border-b border-white/10"}`}
                    >
                      {row.traditional}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import UseCases from "@/components/UseCases";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { industryPages } from "@/lib/content";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Use Cases — What Businesses Automate with SvaraCall",
  description:
    "SvaraCall AI use cases: lead follow-ups, appointment reminders, no-show recovery, payment and renewal reminders, confirmations, feedback, and win-back calls — outcome-driven and far cheaper than a manual calling team.",
  alternates: { canonical: "/use-cases" },
};

const trail = [{ name: "Use cases", path: "/use-cases" }];

export default function UseCasesPage() {
  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <UseCases headingLevel={1} />

        <section id="by-industry" className="bg-canvas-soft">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="display display-h2 max-w-3xl">
              Use cases by industry
            </h2>
            <p className="mt-5 max-w-3xl text-lg text-body">
              Every workflow SvaraCall AI runs, organized by the industry
              it&apos;s built for — in Telugu, Hindi, and English, with every
              outcome logged automatically.
            </p>

            <div className="mt-12 flex flex-col gap-14">
              {industryPages.map((page) => (
                <div key={page.slug}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold text-ink">{page.name}</h3>
                    <Link
                      href={`/industries/${page.slug}`}
                      className="text-sm font-semibold text-ink-deep hover:underline"
                    >
                      Explore {page.name} →
                    </Link>
                  </div>

                  <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {page.workflows.map((workflow, i) => (
                      <Reveal
                        key={workflow.title}
                        as="li"
                        delayMs={(i % 3) * 70}
                        className="rounded-card bg-canvas p-6"
                      >
                        <h4 className="text-base font-bold text-ink">
                          {workflow.title}
                        </h4>
                        <p className="mt-2 text-sm text-body">
                          {workflow.body}
                        </p>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbList(trail)),
        }}
      />
    </>
  );
}

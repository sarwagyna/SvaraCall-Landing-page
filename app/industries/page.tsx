import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { answers, industryPages } from "@/lib/content";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Industries — AI Outbound Calling Across India",
  description:
    "SvaraCall AI adapts reminder, follow-up, and confirmation calls to every Indian industry — healthcare, fintech, real estate, education, e-commerce, and more — premium quality at a fraction of a calling team's cost.",
  alternates: { canonical: "/industries" },
};

const trail = [{ name: "Industries", path: "/industries" }];

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs trail={trail} />
      <main>
        <section className="bg-canvas-soft">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h1 className="display display-h2 max-w-3xl">
              Which industries use AI outbound calling?
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-body">
              {answers.industries}
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {industryPages.map((industry, i) => (
                <Reveal key={industry.slug} as="li" delayMs={(i % 3) * 70}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group flex h-full flex-col rounded-card bg-canvas p-7 transition-colors hover:bg-primary-pale"
                  >
                    <h2 className="text-lg font-bold text-ink">
                      {industry.name}
                    </h2>
                    <p className="mt-2 text-body">{industry.heroSubcopy}</p>
                    <span className="mt-4 text-sm font-semibold text-ink-deep">
                      Explore {industry.name} →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
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

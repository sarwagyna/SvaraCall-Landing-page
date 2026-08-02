import Breadcrumbs from "@/components/Breadcrumbs";
import Compliance from "@/components/Compliance";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { faqs } from "@/lib/content";
import { pageMetadata } from "@/lib/seoMeta";
import { breadcrumbList, faqPageSchema, jsonLdGraph } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Compliance — TRAI, DLT & DPDP-Ready AI Calling",
  description:
    "SvaraCall AI is compliant by design: TRAI and DLT-registered headers, consent-first dialing, instant opt-outs, recording disclosure, and DPDP-aligned data in India.",
  path: "/compliance",
});

const trail = [{ name: "Compliance", path: "/compliance" }];

const complianceFaqs = faqs.filter(
  (faq) =>
    faq.q.includes("TRAI-compliant") || faq.q.includes("DPDP Act"),
);

const graph = jsonLdGraph([
  breadcrumbList(trail),
  faqPageSchema(
    complianceFaqs.map((faq) => ({ question: faq.q, answer: faq.a })),
    { graphNode: true },
  ),
]);

export default function CompliancePage() {
  return (
    <>
      <Breadcrumbs trail={trail} tone="canvas" />
      <main>
        <Compliance headingLevel={1} />

        <section className="bg-canvas-soft">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
            <h2 className="display display-h2">Compliance questions</h2>
            <dl className="mt-10 space-y-8">
              {complianceFaqs.map((faq, i) => (
                <Reveal key={faq.q} delayMs={(i % 2) * 70}>
                  <dt className="text-lg font-bold text-ink">{faq.q}</dt>
                  <dd className="mt-2 text-body">{faq.a}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        <CtaBand />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graph),
        }}
      />
    </>
  );
}

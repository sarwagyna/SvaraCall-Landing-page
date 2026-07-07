import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Book a Pilot — Get a Live SvaraCall Demo",
  description:
    "Book a SvaraCall AI pilot. We'll place a live AI call to your own phone in Telugu, Hindi, or English so you can hear the agent before you commit.",
  alternates: { canonical: "/book-a-pilot" },
};

const trail = [{ name: "Book a pilot", path: "/book-a-pilot" }];

export default function BookAPilotPage() {
  return (
    <>
      <Breadcrumbs trail={trail} />
      <main>
        <Contact />
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

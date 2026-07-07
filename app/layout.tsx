import type { Metadata } from "next";
import { Inter, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site, canonicalSentence } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const notoTelugu = Noto_Sans_Telugu({
  variable: "--font-noto-telugu",
  subsets: ["telugu"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "SvaraCall AI — Affordable AI Outbound Calling Agent for Indian Businesses",
    template: "%s · SvaraCall AI",
  },
  description:
    "AI voice agent that makes your outbound calls — lead follow-ups, reminders, confirmations — in Telugu, Hindi & English. Premium, human-grade calling at a fraction of a calling team's cost. Outcome-driven, TRAI & DPDP ready.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title:
      "SvaraCall AI — Affordable AI Outbound Calling Agent for Indian Businesses",
    description:
      "Premium, human-grade AI calling in Telugu, Hindi & English at a fraction of a calling team's cost. Outcome-driven, TRAI & DPDP ready.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SvaraCall AI — Affordable AI Outbound Calling Agent for Indian Businesses",
    description:
      "Premium AI calling in Telugu, Hindi & English at a fraction of a calling team's cost. Outcome-driven, TRAI & DPDP ready.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
};

// Only expose real, resolvable profile URLs in `sameAs` — never placeholders,
// which would otherwise emit invalid structured data.
const socialProfiles = (
  [site.social.linkedin, site.social.x, site.social.instagram] as string[]
).filter((url) => Boolean(url) && !url.includes("{"));

const orgWebsiteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.legalName,
      legalName: site.legalName,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
      description: canonicalSentence,
      identifier: {
        "@type": "PropertyValue",
        propertyID: "CIN",
        value: site.cin,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.state,
        addressCountry: "IN",
      },
      ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      inLanguage: "en-IN",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoTelugu.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgWebsiteGraph) }}
        />
      </body>
    </html>
  );
}

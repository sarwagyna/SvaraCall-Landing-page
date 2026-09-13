import type { Metadata } from "next";
import Contact from "@/components/Contact";
import LaunchCampaign from "@/components/LaunchCampaign";
import { site } from "@/lib/content";
import {
  formatLaunchDisplayDate,
  getLaunchCanonicalPath,
  getLaunchIso,
  isLaunchLive,
  launchHref,
  launchSeo,
} from "@/lib/launch";
import { pageMetadata } from "@/lib/seoMeta";
import { breadcrumbList, jsonLdGraph } from "@/lib/schema";

export function getLaunchPageMetadata(path?: string): Metadata {
  const live = isLaunchLive();
  const date = formatLaunchDisplayDate();
  const title = live ? launchSeo.liveTitle : launchSeo.preTitle(date);
  const description = live
    ? launchSeo.liveDescription
    : launchSeo.preDescription(date);
  const canonical = path ?? getLaunchCanonicalPath();
  const base = pageMetadata({
    title,
    description,
    path: canonical,
  });

  return {
    ...base,
    title: { absolute: title },
    openGraph: {
      ...base.openGraph,
      title,
      description,
    },
    twitter: {
      ...base.twitter,
      title,
      description,
    },
  };
}

export default function LaunchPageView({ path }: { path: string }) {
  const live = isLaunchLive();
  const date = formatLaunchDisplayDate();
  const launchIso = getLaunchIso();
  const graph = jsonLdGraph([
    breadcrumbList(
      path === "/"
        ? [{ name: "SvaraCall AI", path: "/" }]
        : [{ name: "Pilot launch", path: launchHref }],
    ),
    {
      "@type": "Event",
      name: "SvaraCall Pilot Launch",
      description: live
        ? launchSeo.liveDescription
        : launchSeo.preDescription(date),
      startDate: launchIso,
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "VirtualLocation",
        url: `${site.url}${path === "/" ? "" : path}`,
      },
      organizer: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
    },
  ]);

  return (
    <>
      <main>
        <LaunchCampaign serverLive={live} />
        <Contact
          id="contact"
          headingLevel={2}
          eyebrow="Contact"
          title="Submit your details"
          description="Not joining the pilot? Send your details and we'll contact you after launch."
          submitLabel="Send details"
          messageIntro="Hi SvaraCall AI, I'd like to be contacted about SvaraCall after launch."
        />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
}

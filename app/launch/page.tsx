import type { Metadata } from "next";
import { redirect } from "next/navigation";
import LaunchPageView, {
  getLaunchPageMetadata,
} from "@/components/LaunchPageView";
import {
  getLaunchCanonicalPath,
  isLaunchLive,
  launchHref,
} from "@/lib/launch";

export const revalidate = 60;

export function generateMetadata(): Metadata {
  if (isLaunchLive()) {
    return {};
  }
  return getLaunchPageMetadata(getLaunchCanonicalPath());
}

export default function LaunchPage() {
  if (isLaunchLive()) {
    redirect("/");
  }
  return <LaunchPageView path={launchHref} />;
}

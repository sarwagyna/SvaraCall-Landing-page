import Image from "next/image";
import Link from "next/link";
import { site, canonicalSentence } from "@/lib/content";
import { routes, bookPilotHref } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="bg-[#0b1110] text-white/80">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-[900] tracking-tight text-white">
              SvaraCall AI
            </p>
            <p className="mt-3 max-w-md text-sm text-white/70">
              {canonicalSentence}
            </p>
            <p className="mt-4 text-sm text-white/70">
              Also by{" "}
              <a
                href={site.parentUrl}
                className="font-semibold text-white hover:underline"
              >
                {site.legalName}
              </a>
:{" "}
              <a
                href={site.svaraRxUrl}
                className="inline-flex items-center gap-1.5 align-middle font-semibold text-primary hover:underline"
              >
                <Image
                  src="/SvaraRx-Icon-sm.webp"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] rounded-[5px]"
                />
                SvaraRx
              </a>{" "}
              — voice prescriptions for doctors.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Explore
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {routes.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={bookPilotHref}
                  className="font-semibold text-primary hover:underline"
                >
                  Book a pilot
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:text-right">
            <address className="text-sm not-italic leading-relaxed text-white/70">
              {site.legalName}
              <br />
              {site.city}, {site.state}, {site.country}
              <br />
              CIN: {site.cin}
              <br />
              <a
                href={`mailto:${site.email}`}
                className="text-white/80 hover:underline"
              >
                {site.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/65 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights
            reserved.
          </p>
          <p>Last updated: {site.lastUpdated}</p>
        </div>
      </div>
    </footer>
  );
}

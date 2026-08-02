import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Junk single-char paths Google crawled — permanently collapse to home. */
const JUNK_PATHS = new Set(["/$", "/&"]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (JUNK_PATHS.has(pathname)) {
    const home = new URL(request.url);
    home.pathname = "/";
    home.search = "";
    home.hash = "";
    return NextResponse.redirect(home, 308);
  }

  // Strip trailing slash → canonical path.
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const target = new URL(request.url);
    target.pathname = pathname.replace(/\/+$/, "") || "/";
    target.hash = "";
    return NextResponse.redirect(target, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except static assets / next internals.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

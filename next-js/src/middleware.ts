import {type NextRequest, NextResponse} from "next/server";

import {updateSession} from "./lib/session";

export async function middleware(request: NextRequest) {
  let loggedIn = request.cookies.get("session")?.value;
  if (loggedIn && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }
  return await updateSession(request);
}

export const config = {
  // do not run the middleware for the following paths
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

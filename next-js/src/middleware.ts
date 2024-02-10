import {type NextRequest, NextResponse} from "next/server";

import {getSession, updateSession} from "./lib/session";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/login")) {
    let loggedIn = await getSession();
    if (loggedIn) {
      return NextResponse.redirect(new URL("/profile", request.url));
    }
  }
  return await updateSession(request);
}

export const config = {
  // do not run the middleware for the following paths
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

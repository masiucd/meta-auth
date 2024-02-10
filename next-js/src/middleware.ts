import {type NextRequest, NextResponse} from "next/server";

import {decrypt} from "./app/(main)/actions";

export async function middleware(request: NextRequest) {
  let session = request.cookies.get("session");
  if (session) {
    let {value} = session;
    let decrypted = await decrypt(value);
    if (!decrypted) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }
    if (decrypted && request.nextUrl.pathname === "/") {
      return NextResponse.rewrite(new URL("/profile", request.url));
    }
  }
  if (!session && request.nextUrl.pathname === "/profile") {
    return NextResponse.rewrite(new URL("/login", request.url));
  }
}

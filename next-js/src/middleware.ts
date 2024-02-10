// import {cookies} from "next/headers";
import {type NextRequest, NextResponse} from "next/server";

import {decrypt} from "./app/(main)/actions";

export async function middleware(request: NextRequest) {
  let session = request.cookies.get("session");
  if (!session) {
    return NextResponse.rewrite(new URL("/", request.url));
  }
  if (session) {
    let {value} = session;
    let decrypted = await decrypt(value);
    if (!decrypted) {
      return NextResponse.rewrite(new URL("/", request.url));
    }
    if (decrypted && request.nextUrl.pathname === "/") {
      return NextResponse.rewrite(new URL("/profile", request.url));
    }
  }
}

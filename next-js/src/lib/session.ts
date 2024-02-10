import "server-only";

import {cookies} from "next/headers";
import {type NextRequest, NextResponse} from "next/server";

import {decrypt, encrypt} from "./jwt";

export async function updateSession(request: NextRequest) {
  let session = request.cookies.get("session");
  if (!session) return;

  // Refresh session so it doesn't expire
  let parsed = await decrypt(session.value);
  parsed.expires = getExpires();
  let res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt({
      email: parsed.email as string,
      expires: parsed.expires as Date,
    }),
    httpOnly: true, // only readable by the server
    expires: parsed.expires as Date,
  });
  return res;
}

export function getExpires(seconds: number = 60): Date {
  let milliseconds = 1000;
  return new Date(Date.now() + seconds * milliseconds); // one minute from now if not specified
}

export async function getSession() {
  let session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

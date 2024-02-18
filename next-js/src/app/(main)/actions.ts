"use server";

import {cookies} from "next/headers";
import {redirect} from "next/navigation";

import {encrypt} from "@/lib/jwt";
import {getExpires} from "@/lib/session";

/**
 * Logs the user in by setting a session cookie
 * and redirecting to the profile page
 */
export async function login(formData: FormData) {
  let email = formData.get("email");
  let password = formData.get("password");
  if (!email || !password) {
    return {
      error: "Invalid email or password",
      ok: false,
    };
  }
  // Here in a real app we do our database lookup to find the user
  // hash the password would be a good idea in a real app
  if (typeof email !== "string" || typeof password !== "string") {
    return {
      error: "Invalid email or password",
      ok: false,
    };
  }

  let expires = getExpires();
  let session = await encrypt({email, expires});
  cookies().set("session", session, {
    expires,
    // only readable by the server
    httpOnly: true,
  });
  redirect("/profile");
}

/**
 * Logs the user out by clearing the session cookie
 * and redirecting to the login page
 */
export async function logout() {
  cookies().set("session", "", {
    expires: new Date(0),
    httpOnly: true,
  });
  redirect("/login");
}

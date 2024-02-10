"use server";

import {cookies} from "next/headers";
import {redirect} from "next/navigation";

import {encrypt} from "@/lib/jwt";
import {getExpires} from "@/lib/session";

const AdminEmail = "masiu@ex.com";
const AdminPassword = "admin";
export async function login(formData: FormData) {
  let email = formData.get("email");
  let password = formData.get("password");
  if (!email || !password) {
    return {
      error: "Invalid email or password",
      ok: false,
    };
  }
  if (email !== AdminEmail || password !== AdminPassword) {
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

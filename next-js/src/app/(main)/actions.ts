"use server";
import "server-only";

import {jwtVerify, SignJWT} from "jose";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

let secretKey = "secret";
let key = new TextEncoder().encode(secretKey);

async function encrypt(payload: {email: string; expires: Date}) {
  return await new SignJWT(payload)
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime(payload.expires)
    .sign(key);
}

export async function decrypt(input: string) {
  let {payload} = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

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

  let expires = new Date(Date.now() + 30 * 1000); // 30 seconds
  let session = await encrypt({email, expires});
  cookies().set("session", session, {
    expires,
    // only readable by the server
    httpOnly: true,
  });
  redirect("/profile");
}

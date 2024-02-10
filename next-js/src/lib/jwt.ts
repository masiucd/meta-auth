"use server";
import "server-only";

import {jwtVerify, SignJWT} from "jose";

let secretKey = "secret";
let key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: {email: string; expires: Date}) {
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

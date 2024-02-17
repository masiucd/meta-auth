import {createCookieSessionStorage, type Session} from "@remix-run/node"; // or cloudflare/deno

type SessionData = {
  username: string;
  expiresAt: string;
};

type SessionFlashData = {
  error: string;
};

const {getSession, commitSession, destroySession} = createCookieSessionStorage<
  SessionData,
  SessionFlashData
>({
  cookie: {
    name: "__session",
    secrets: ["some-secret"], // you can have multiple secrets. Here we would in a real app use a secret from the environment
    sameSite: "lax",
    httpOnly: true, // don't let JS code access cookies only the server
    path: "/",
    maxAge: 60, // 60 seconds
    // maxAge: 60 * 60 * 24 * 30, // 30 days in seconds
    secure: process.env.NODE_ENV === "production",
  },
});

export function setSessionData(
  session: Session<SessionData, SessionFlashData>,
  username: string
) {
  session.set("username", username);
  session.set("expiresAt", new Date(Date.now() + 1000 * 60).toISOString()); // 60 seconds
}

export {commitSession, destroySession, getSession};

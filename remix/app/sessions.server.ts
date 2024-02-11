import {createCookieSessionStorage} from "@remix-run/node"; // or cloudflare/deno

type SessionData = {
  username: string;
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

export {commitSession, destroySession, getSession};

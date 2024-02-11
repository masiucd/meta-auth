import {
  type ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import {Form, useLoaderData} from "@remix-run/react";
import {cn} from "lib/cn";
import {useState} from "react";

import {PageWrapper} from "~/components/page-wrapper";
import {commitSession, getSession} from "~/sessions.server";

let validUserNames = Object.freeze([
  "apple",
  "banana",
  "date",
  "fig",
  "grape",
  "honey",
]);

export async function loader({request}: LoaderFunctionArgs) {
  let session = await getSession(request.headers.get("Cookie"));

  // check if we are logged in, if so redirect to the home page.
  if (session.has("username")) {
    return redirect("/");
  }
  let data = {error: session.get("error")};
  return json(data, {headers: {"Set-Cookie": await commitSession(session)}});
}

export async function action({request}: ActionFunctionArgs) {
  let formData = await request.formData();
  let userName = formData.get("username");
  let password = formData.get("password");
  if (typeof userName !== "string" || typeof password !== "string") {
    return new Response("Bad Request", {status: 400});
  }

  let session = await getSession(request.headers.get("Cookie"));
  // Here in a real app we would check the password against a hashed password and make a db lookup to verify the user.
  // This is just for testing purposes.
  if (!validUserNames.includes(userName)) {
    session.flash("error", "Invalid username or password.");
    return redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }
  // Username was valid so we set it in the session.
  session.set("username", userName);

  // Login was successful so we redirect to the profile page.
  return redirect("/profile", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export default function LoginPage() {
  // if there is an error in the session we will display it here.
  let {error} = useLoaderData<typeof loader>();
  return (
    <PageWrapper className="items-center justify-center">
      <div className="w-full max-w-[32rem] rounded-md border border-gray-700 bg-gray-100 p-10 shadow-md">
        <div className="mb-5">
          <h1>Login</h1>
          <p>Login to your account to continue.</p>
        </div>
        <Form method="post">
          <fieldset
            className={cn(
              "flex flex-col gap-2",
              error &&
                "animate-pulse animate-once animate-duration-[600ms] animate-ease-in animate-reverse"
            )}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="h-10 rounded-md border px-3 transition duration-200 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="h-10 rounded-md border px-3 transition duration-200 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex border">
              <button
                className="w-full rounded-md bg-gray-800 px-4 py-2 font-bold text-gray-100 transition-opacity duration-150 hover:opacity-65"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="h-4">
              {
                // Display any errors that were set in the session.
                error ? <p className="text-red-500">{error}</p> : null
              }
            </div>
          </fieldset>
        </Form>
        <UserNameHint />
      </div>
    </PageWrapper>
  );
}

function UserNameHint() {
  let [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <small className="mb-2 block">
        Don&apos;t know the username or password?
        <button
          type="button"
          className={cn(
            "ml-1 text-gray-500 underline hover:text-primary-600",
            open && "font-bold text-primary-500"
          )}
          onClick={() => setOpen(!open)}
        >
          Get a hint
        </button>
      </small>
      <ul className="flex min-h-8 flex-wrap gap-2">
        {open && (
          <>
            {validUserNames.map((name) => (
              <li
                key={name}
                className="rounded-md bg-gray-200 px-2 py-1 text-sm font-bold text-gray-800"
              >
                {name}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

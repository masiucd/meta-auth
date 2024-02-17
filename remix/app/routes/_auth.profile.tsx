import {
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import {Form, useLoaderData} from "@remix-run/react";
import {format, parseISO} from "date-fns";

import {commitSession, getSession, setSessionData} from "~/sessions.server";

export async function action({request}: ActionFunctionArgs) {
  let formData = await request.formData();
  let username = formData.get("username");
  let session = await getSession(request.headers.get("Cookie"));
  if (!username || typeof username !== "string") {
    return redirect("/login");
  }
  setSessionData(session, username);
  return redirect("/profile", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function loader({request}: LoaderFunctionArgs) {
  let session = await getSession(request.headers.get("Cookie"));
  // check if we are logged in, if not redirect to the login page.
  if (!session.has("username")) {
    return redirect("/login");
  }
  let username = session.get("username");
  let expiresAt = session.get("expiresAt");
  if (!expiresAt) {
    return redirect("/login");
  }

  return {
    username,
    expiresAt: format(expiresAt, "yyyy-MM-dd HH:mm:ss"),
    expiresIn: format(parseISO(expiresAt).getTime() - Date.now(), "s"),
  };
}
// Get the cookie to show when it expires
export default function ProfileRoute() {
  let {username, expiresAt, expiresIn} = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Profile</h1>
      <p>
        Welcome to your profile page Mr/mrs{" "}
        <span className="font-bold uppercase text-primary-600">{username}</span>
        .
      </p>
      <aside className="my-4 flex flex-col gap-2 rounded-md bg-gray-100 p-2 text-gray-800 shadow-md transition-all hover:bg-gray-200 hover:shadow-xl">
        <p>Refresh the page to get the updated values</p>
        <p>Session expires at: {expiresAt}</p>
        <p>Session expires in: {expiresIn} s</p>
      </aside>
      <Form method="post">
        <input type="hidden" name="username" value={username} />
        <div className="flex gap-2">
          <button
            name="_action"
            value="refresh"
            className="rounded-sm bg-gray-300 p-2 font-semibold text-gray-800 shadow transition-all hover:bg-gray-600 hover:text-primary-100 hover:shadow-xl"
            type="submit"
          >
            Refresh session
          </button>
          <button
            name="_action"
            value="logout"
            className="rounded-sm bg-gray-300 p-2 font-semibold text-gray-800 shadow transition-all hover:bg-gray-600 hover:text-primary-100 hover:shadow-xl"
          >
            Logout
          </button>
        </div>
      </Form>
    </div>
  );
}

import {type LoaderFunctionArgs, redirect} from "@remix-run/node";

import {getSession} from "~/sessions.server";

export async function loader({request}: LoaderFunctionArgs) {
  let session = await getSession(request.headers.get("Cookie"));

  // check if we are logged in, if not redirect to the login page.
  if (!session.has("username")) {
    return redirect("/login");
  }

  return null;
}
// Get the cookie to show when it expires
export default function ProfileRoute() {
  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome to your profile page.</p>
      <p>
        Reload the page to refresh the session and see the session data change.
      </p>
    </div>
  );
}

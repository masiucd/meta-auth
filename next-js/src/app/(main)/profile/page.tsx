import {format} from "date-fns";
import {redirect} from "next/navigation";

import {PageWrapper} from "@/app/components/page-wrapper";
import {getSession} from "@/lib/session";

import {logout} from "../actions";

async function isLoggedIn() {
  let session = await getSession();
  if (!session) {
    return redirect("/login");
  }

  return session as {email: string; expires: string};
}

export default async function ProfilePage() {
  let session = await isLoggedIn();
  return (
    <PageWrapper>
      <h1>Profile</h1>
      <aside className="mb-5 flex flex-col gap-2">
        <p>
          Welcome to your profile page{" "}
          <span className="font-bold text-gray-900">{session.email}</span>{" "}
        </p>

        <p>
          Session expires at{" "}
          <span className="font-bold text-gray-900">
            {format(new Date(session.expires), "yyyy-MM-dd HH:mm:ss")}
          </span>
        </p>
        <p className="italic underline">
          Refresh the page to update the session and keep being logged in.
        </p>
      </aside>
      <form action={logout}>
        <button
          className="rounded bg-gray-900 px-2 py-1 font-bold capitalize text-gray-100 shadow-sm transition-opacity duration-150 hover:opacity-65"
          type="submit"
        >
          logout
        </button>
      </form>
    </PageWrapper>
  );
}

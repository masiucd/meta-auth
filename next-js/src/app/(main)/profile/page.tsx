import {redirect} from "next/navigation";

import {PageWrapper} from "@/app/components/page-wrapper";
import {getSession} from "@/lib/session";

import {logout} from "../actions";

async function checkAuth() {
  let loggedIn = await getSession();
  if (!loggedIn) {
    return redirect("/login");
  }
}

export default async function ProfilePage() {
  await checkAuth();
  return (
    <PageWrapper>
      <h1>Profile</h1>
      <p>Welcome to your profile page</p>
      <p>Here you can see your personal information and update your settings</p>
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

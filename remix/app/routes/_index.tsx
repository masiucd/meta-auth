import type {LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import {Link, useLoaderData} from "@remix-run/react";
import {cn} from "lib/cn";

import {PageWrapper} from "~/components/page-wrapper";
import {getSession} from "~/sessions.server";

export const meta: MetaFunction = () => {
  return [
    {title: "Auth Remix App"},
    {name: "description", content: "Auth with Remix!"},
  ];
};

export async function loader({request}: LoaderFunctionArgs) {
  let session = await getSession(request.headers.get("Cookie"));
  let user = session.get("username");
  return user ? user : null;
}

export default function Index() {
  let user = useLoaderData<typeof loader>();
  return (
    <PageWrapper className="flex items-center justify-center">
      <div>
        <h1>
          Authentication with R
          <span className="relative inline-block -rotate-6 bg-gradient-to-r from-primary-500 to-primary-800 bg-clip-text text-transparent">
            e
          </span>
          mix{" "}
          <span className="relative inline-block rotate-2 bg-gradient-to-r from-primary-500 to-primary-800 bg-clip-text text-transparent">
            JS
          </span>
        </h1>
        <div className="flex gap-3">
          <Link
            className={cn(
              "underline underline-offset-2 transition-opacity duration-150 hover:opacity-50",
              user && "opacity-60 pointer-events-none"
            )}
            to="/login"
          >
            Login
          </Link>
          <Link
            className="underline underline-offset-2 transition-opacity duration-150 hover:opacity-50"
            to="/profile"
          >
            Profile
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}

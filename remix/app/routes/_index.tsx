import type {MetaFunction} from "@remix-run/node";
import {Link} from "@remix-run/react";

import {PageWrapper} from "~/components/page-wrapper";

export const meta: MetaFunction = () => {
  return [
    {title: "New Remix App"},
    {name: "description", content: "Welcome to Remix!"},
  ];
};

export default function Index() {
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
            className="underline underline-offset-2 transition-opacity duration-150 hover:opacity-50"
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

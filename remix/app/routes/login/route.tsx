import {Form, Link} from "@remix-run/react";

import {PageWrapper} from "~/components/page-wrapper";

export default function LoginPage() {
  return (
    <PageWrapper className="items-center justify-center">
      <div className="w-full max-w-[32rem] rounded-md border border-gray-700 bg-gray-100 p-10 shadow-md">
        <div className="mb-5">
          <h1>Login</h1>
          <p>Login to your account to continue.</p>
        </div>
        <Form method="post">
          <fieldset className="flex flex-col gap-2">
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
            <small>
              Forgot your password?{" "}
              <Link
                className="text-primary-500 underline hover:text-primary-600"
                to="/"
              >
                Reset it
              </Link>
            </small>
          </fieldset>
        </Form>
      </div>
    </PageWrapper>
  );
}

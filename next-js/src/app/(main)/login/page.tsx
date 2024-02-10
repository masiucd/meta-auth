import Link from "next/link";

import {PageWrapper} from "@/app/components/page-wrapper";

import {LoginForm} from "../login-form";

export default function LoginPage() {
  return (
    <PageWrapper className="items-center justify-center">
      <div className="w-[30rem] rounded-sm border p-10 text-base shadow-md">
        <h3 className="mb-10 text-3xl font-bold text-gray-700">Login</h3>
        <LoginForm>
          <div className="py-2 text-center">
            <Link
              className="underline underline-offset-2 transition-colors duration-200 hover:text-primary-500"
              href="/"
            >
              Forgot your password?
            </Link>
          </div>
        </LoginForm>
      </div>
    </PageWrapper>
  );
}

import Link from "next/link";
import {type InputHTMLAttributes, type ReactNode} from "react";

import {PageWrapper} from "@/app/components/page-wrapper";

import {cn} from "../lib/cn";

function FormGroup({
  children,
  label,
  className,
}: {
  children: ReactNode;
  label: string;
  className?: string;
}) {
  let formatedLabel = label.replaceAll("-", " ").toLowerCase();
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label htmlFor={label}>
        <span className="font-semibold capitalize text-gray-700">
          {formatedLabel}
        </span>
      </label>
      {children}
    </div>
  );
}

function Input({
  id,
  className,
  ...props
}: {id: string} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn("border border-gray-300 rounded-md h-10", className)}
      id={id}
      {...props}
    />
  );
}

export default function Home() {
  return (
    <PageWrapper className="items-center justify-center">
      <div className="w-[30rem] rounded-sm border p-10 text-base shadow-md">
        <h3 className="mb-10 text-3xl font-bold text-gray-700">Login</h3>
        <form action="">
          <fieldset className="flex flex-col gap-1">
            <FormGroup label="email">
              <Input type="email" id="email" name="email" required />
            </FormGroup>
            <FormGroup label="password" className="mb-4">
              <Input type="password" id="password" name="password" required />
            </FormGroup>
            <button
              className="h-10 w-full rounded-md bg-gray-900 text-white transition-opacity duration-200 ease-in-out hover:opacity-75"
              type="submit"
            >
              Login
            </button>
          </fieldset>
        </form>
        <div className="py-2 text-center">
          <Link
            className="underline underline-offset-2 transition-colors duration-200 hover:text-primary-500"
            href="/"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}

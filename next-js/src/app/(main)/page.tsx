import {type InputHTMLAttributes, type ReactNode} from "react";

import {PageWrapper} from "@/app/components/page-wrapper";

import {cn} from "../lib/cn";

function FormGroup({
  children,
  label,
  id,
  className,
}: {
  children: ReactNode;
  label: string;
  id: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label htmlFor={id}>{label}</label>
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
    <PageWrapper>
      <div className="w-[30rem] border border-red-500">
        <form action="">
          <fieldset>
            <FormGroup label="Name" id="name">
              <Input type="text" id="email" name="email" />
            </FormGroup>
            <FormGroup label="Email" id="email">
              <Input type="email" id="email" name="email" />
            </FormGroup>
          </fieldset>
          <button type="submit">Login</button>
        </form>
      </div>
    </PageWrapper>
  );
}

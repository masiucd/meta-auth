"use client";

import {type ReactNode, useEffect, useState} from "react";
import {useFormStatus} from "react-dom";

import {FormGroup, Input} from "../components/form";
import {login} from "./actions";

export function LoginForm({children}: {children?: ReactNode}) {
  let [error, setError] = useState<null | string>(null);

  const onSubmit = async (formData: FormData) => {
    let success = await login(formData);
    if (success && !success.ok) {
      setError(success.error);
    }
  };

  useEffect(() => {
    if (error) {
      let id = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(id);
    }
  }, [error]);

  return (
    <form action={onSubmit}>
      <fieldset className="flex flex-col gap-1">
        <FormGroup label="email">
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup label="password" className="mb-4">
          <Input type="password" id="password" name="password" required />
        </FormGroup>
        <LoginButton />
        {children}
        <div className="h-5">
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </fieldset>
    </form>
  );
}

function LoginButton() {
  let {pending} = useFormStatus();
  return (
    <button
      className="h-10 w-full rounded-md bg-gray-900 text-white transition-opacity duration-200 ease-in-out hover:opacity-75"
      type="submit"
      aria-disabled={pending}
    >
      Login
    </button>
  );
}

import {type InputHTMLAttributes, type ReactNode} from "react";

import {cn} from "../lib/cn";

export function FormGroup({
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

export function Input({
  id,
  className,
  ...props
}: {id: string} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn("border pl-1 border-gray-300 rounded-md h-10", className)}
      id={id}
      {...props}
    />
  );
}

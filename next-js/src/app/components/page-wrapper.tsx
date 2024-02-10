import {type ReactNode} from "react";

import {cn} from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
};

export function PageWrapper({children, className, fluid}: Props) {
  return (
    <section
      className={cn(
        "mx-auto max-w-5xl w-full border border-blue-600 flex flex-col flex-1",
        className,
        fluid ? "max-w-none" : "max-w-5xl"
      )}
    >
      {children}
    </section>
  );
}

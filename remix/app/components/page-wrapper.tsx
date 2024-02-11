import {cn} from "lib/cn";
import {type ReactNode} from "react";

type Props = {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
};

export function PageWrapper({children, className, fluid}: Props) {
  return (
    <section
      className={cn(
        "mx-auto max-w-5xl w-full flex flex-col flex-1",
        className,
        fluid ? "max-w-none" : "max-w-5xl"
      )}
    >
      {children}
    </section>
  );
}

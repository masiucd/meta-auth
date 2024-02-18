import Link from "next/link";
import {type ReactNode} from "react";

export default function MainLayout({children}: {children: ReactNode}) {
  return (
    <>
      <header className="header-and-footer">
        <Link href="/">
          <strong>
            Authentication with{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Next.js
            </span>
          </strong>
        </Link>
      </header>
      <main className="flex min-h-[calc(100dvh-128.5px)] flex-col">
        {children}
      </main>
      <footer className="header-and-footer">
        <strong>
          <Link href="/login">Login</Link>
        </strong>
      </footer>
    </>
  );
}

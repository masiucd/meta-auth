import {type ReactNode} from "react";

export default function MainLayout({children}: {children: ReactNode}) {
  return (
    <>
      <header className="h-16 border border-blue-500">
        <strong>Header</strong>
      </header>
      <main className="flex min-h-[calc(100dvh-128px)] flex-col">
        {children}
      </main>
      <footer className="h-16 border border-blue-500">
        <strong>Footer</strong>
      </footer>
    </>
  );
}

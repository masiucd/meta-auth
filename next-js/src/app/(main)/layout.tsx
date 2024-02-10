import {type ReactNode} from "react";

export default function MainLayout({children}: {children: ReactNode}) {
  return (
    <>
      <header className="header-and-footer">
        <strong>Header</strong>
      </header>
      <main className="flex min-h-[calc(100dvh-128.5px)] flex-col">
        {children}
      </main>
      <footer className="header-and-footer">
        <strong>Footer</strong>
      </footer>
    </>
  );
}

import type {LinksFunction} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  {rel: "stylesheet", href: stylesheet},
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-50 text-gray-700">
        <header className="layout-base">
          <strong>Header</strong>
        </header>
        <main className="mx-auto flex min-h-[calc(100dvh-14rem)] max-w-5xl flex-col">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <footer className="layout-base">
          <strong>Footer</strong>
        </footer>
      </body>
    </html>
  );
}

import "./globals.css";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {type ReactNode} from "react";

import {cn} from "./lib/cn";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Auth with Next JS",
  description: "Auth with Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-gray-50 text-gray-900", inter.className)}>
        {children}
      </body>
    </html>
  );
}

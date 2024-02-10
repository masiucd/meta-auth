import Link from "next/link";

import {PageWrapper} from "@/app/components/page-wrapper";

export default function Home() {
  return (
    <PageWrapper className="items-center justify-center">
      <aside>
        <h1>Authentication with Next js</h1>
        <div className="flex gap-2">
          <Link
            href="/login"
            className="underline underline-offset-2 transition-colors duration-200 hover:text-primary-500"
          >
            Login
          </Link>
          <Link
            href="/profile"
            className="underline underline-offset-2 transition-colors duration-200 hover:text-primary-500"
          >
            Profile
          </Link>
        </div>
      </aside>
    </PageWrapper>
  );
}

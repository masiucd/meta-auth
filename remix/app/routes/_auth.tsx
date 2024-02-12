import {Outlet} from "@remix-run/react";

import {PageWrapper} from "~/components/page-wrapper";

// Layout route for auth
export default function AuthLayout() {
  return (
    <PageWrapper className="items-center justify-center">
      <Outlet />
    </PageWrapper>
  );
}

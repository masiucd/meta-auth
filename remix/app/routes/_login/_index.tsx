import {Outlet} from "@remix-run/react";

export default function LoginLayout() {
  return (
    <div>
      <h1>Layout for login</h1>
      <Outlet />
    </div>
  );
}

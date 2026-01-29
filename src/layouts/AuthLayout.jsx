import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center">
      <Outlet />
    </main>
  );
}
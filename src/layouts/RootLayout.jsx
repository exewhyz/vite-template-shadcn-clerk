import { ClerkProvider } from "@clerk/react-router";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { shadcn } from "@clerk/themes";
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

export default function RootLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen w-full flex flex-col">
        <ClerkProvider
          appearance={{
            theme: shadcn,
          }}
          publishableKey={PUBLISHABLE_KEY}
        >
          <Navbar />
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </ClerkProvider>
      </div>
    </ThemeProvider>
  );
}

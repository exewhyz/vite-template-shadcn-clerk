import React from "react";
import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { useAuth, UserButton } from "@clerk/clerk-react";
import Spinner from "./Spinner";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";

function Navbar() {
  const { isLoaded, isSignedIn } = useAuth();
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className="sticky top-0 z-50 flex h-14 items-center justify-between px-8 shadow-sm">
      <h1 className="text-4xl font-bold">Imagione</h1>
      <div className="flex gap-4">
        <Button size="sm" variant="outline">
          <NavLink to="/">Home</NavLink>
        </Button>
      </div>
      {isLoaded ? (
        <div>
          {!isSignedIn ? (
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <NavLink to="/auth/login">Login</NavLink>
              </Button>
              <Button size="sm" variant="outline">
                <NavLink to="/auth/register">Register</NavLink>
              </Button>
            </div>
          ) : (
            <UserButton
              showName
              userProfileMode="navigation"
              userProfileUrl="/auth/profile"
            >
              <UserButton.MenuItems>
                <UserButton.Action
                  label={theme === "dark" ? "Light Mode" : "Dark Mode"}
                  labelIcon={
                    theme === "dark" ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )
                  }
                  onClick={toggleTheme}
                />
                <UserButton.Link
                  label="Create organization"
                  labelIcon={<DotIcon />}
                  href="/about"
                />
              </UserButton.MenuItems>
            </UserButton>
          )}
        </div>
      ) : (
        <Spinner showText showIcon={false} />
      )}
    </nav>
  );
}
const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
};
export default Navbar;

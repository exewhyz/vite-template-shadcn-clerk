import React from "react";
import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { useAuth, UserButton } from "@clerk/clerk-react";
import Spinner from "./Spinner";

function Navbar() {
  const { isLoaded, isSignedIn } = useAuth();

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
            />
          )}
        </div>
      ) : (
        <Spinner showText showIcon={false} />
      )}
    </nav>
  );
}

export default Navbar;

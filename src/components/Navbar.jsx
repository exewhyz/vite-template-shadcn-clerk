import React from "react";
import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { useAuth, UserButton } from "@clerk/clerk-react";

function Navbar() {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <nav className="flex h-14 items-center justify-between px-8 shadow-sm">
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
                <NavLink to="/login">Login</NavLink>
              </Button>
              <Button size="sm" variant="outline">
                <NavLink to="/register">Register</NavLink>
              </Button>
            </div>
          ) : (
            <UserButton showName />
          )}
        </div>
      ) : (
        <div className="text-sm font-semibold">Loading...</div>
      )}
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";

function NotFound() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-full">
      <h1 className="text-4xl tracking-tighter font-semibold">404 Not Found</h1>
      <p className="text-sm text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Button variant="secondary">
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
}

export default NotFound;

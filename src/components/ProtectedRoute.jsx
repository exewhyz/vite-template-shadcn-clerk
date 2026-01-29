import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router";
import Spinner from "./Spinner";

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) {
    return <Spinner showText/>;
  }

  if (!isSignedIn) {
    return <Navigate to={"/auth/login"} replace />;
  }

  return children;
};

export default ProtectedRoute;

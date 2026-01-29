import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <SignIn path="/auth/login" routing="path" signUpUrl="/auth/register" />
  );
}

export default Login;

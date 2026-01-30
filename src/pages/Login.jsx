import { SignIn } from "@clerk/react-router";

function Login() {
  return (
    <SignIn path="/auth/login" routing="path" signUpUrl="/auth/register" />
  );
}

export default Login;

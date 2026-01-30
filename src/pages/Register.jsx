import { SignUp } from "@clerk/clerk-react";

function Register() {
  return (
    <SignUp path="/auth/register" routing="path" signInUrl="/auth/login" />
  );
}

export default Register;

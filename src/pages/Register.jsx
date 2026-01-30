import { SignUp } from "@clerk/react-router";

function Register() {
  return (
    <SignUp path="/auth/register" routing="path" signInUrl="/auth/login" />
  );
}

export default Register;

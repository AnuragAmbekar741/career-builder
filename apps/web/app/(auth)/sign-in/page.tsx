import { SignInForm } from "@/components/forms/auth/SignIn";
import AuthLayout from "@/components/layouts/auth";
import React from "react";

const SignIn = () => {
  return (
    <AuthLayout>
      <h3 className="text-4xl font-light">Sign In</h3>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;

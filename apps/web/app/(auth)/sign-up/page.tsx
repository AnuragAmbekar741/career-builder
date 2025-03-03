import { SignUpForm } from "@/components/forms/auth/SignUp";
import AuthLayout from "@/components/layouts/auth";
import React from "react";

const SignUp: React.FC = () => {
  return (
    <AuthLayout>
      <h3 className="text-4xl font-light">Sign Up</h3>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUp;

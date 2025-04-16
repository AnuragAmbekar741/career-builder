import AuthLayout from "@/components/layouts/auth";
import { SignupForm } from "@/components/forms/SignupForm";

export function Signup() {
  return (
    <AuthLayout>
      <SignupForm className="w-[30rem]" />
    </AuthLayout>
  );
}

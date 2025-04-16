import AuthLayout from "@/components/layouts/auth";
import { LoginForm } from "@/components/forms/LoginForm";

export function Login() {
  return (
    <AuthLayout>
      <LoginForm className="w-[30rem]" />
    </AuthLayout>
  );
}

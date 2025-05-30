"use client";

import LoginForm from "@/ui/login/LoginForm";
import useForm from "@/hooks/useForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginFormValidation } from "@/lib/login/loginFormValidation";
import { toast } from "sonner";

const loginFormInitialValues = {
  email: "",
  password: "",
};

const LoginClient = () => {
  const router = useRouter();
  const form = useForm(loginFormInitialValues, loginFormValidation);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: form.values.email,
          password: form.values.password,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      router.replace("/foods");
      toast.success("Selamat datang di Food Library");
    } catch (error) {
      toast.error(error.toString());
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex gap-2 items-center">
        <img src="./koki-rumahan-logo.svg" className="w-10 h-10" />
        <p className="font-bold font-[Quicksand] text-base">KokiRumahan</p>
      </div>
      <div className="w-full max-w-[400px] mt-8">
        <LoginForm form={form} handleLogin={handleLogin} loading={loading} />
      </div>
    </div>
  );
};

export default LoginClient;

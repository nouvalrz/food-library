"use client";

import LoginForm from "@/ui/login/LoginForm";
import useForm from "@/hooks/useForm";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const loginFormValidation = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format";
    }
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};

const loginFormInitialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const router = useRouter();
  const form = useForm(loginFormInitialValues, loginFormValidation);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/login", {
        email: form.values.email,
        password: form.values.password,
      });
      alert("Success");
      router.push("/");
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full max-w-[400px]">
        <LoginForm form={form} handleLogin={handleLogin} loading={loading} />
      </div>
    </div>
  );
};

export default LoginPage;

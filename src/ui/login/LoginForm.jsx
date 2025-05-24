import React from "react";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import BaseCard from "../BaseCard";

const LoginForm = ({ form, handleLogin, loading }) => {
  const { handleSubmit, values, handleChange, errors } = form;
  return (
    <BaseCard className="p-6">
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="text-center">
          <h2 className="text-xl font-medium">Selamat datang di KokiRumahan</h2>
          <p>Silahkan login dengan akun anda</p>
        </div>
        <Input
          onChange={handleChange}
          value={values.email}
          name="email"
          type="text"
          label="Email"
          placeholder="example@mail.com"
          error={errors.email}
        />
        <Input
          onChange={handleChange}
          value={values.password}
          name="password"
          type="password"
          label="Password"
          placeholder="Your password"
          error={errors.password}
        />
        <Button title="Login" loading={loading} type="submit" />
      </form>
    </BaseCard>
  );
};

export default LoginForm;

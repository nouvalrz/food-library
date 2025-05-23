import React from "react";
import Input from "@/ui/Input";
import Button from "@/ui/Button";

const LoginForm = ({ form, handleLogin, loading }) => {
  const { handleSubmit, values, handleChange, errors } = form;
  return (
    <form
      className="bg-white shadow p-6 flex flex-col gap-6"
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="text-center">
        <h2 className="text-xl font-medium">Welcome to Food Library</h2>
        <p>Please login with your account</p>
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
  );
};

export default LoginForm;

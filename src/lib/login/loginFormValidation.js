export const loginFormValidation = (values) => {
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
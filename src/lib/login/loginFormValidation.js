export const loginFormValidation = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email harus diisi";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      errors.email = "Formal email tidak valid";
    }
  }

  if (!values.password) {
    errors.password = "Password harus diisi";
  }

  return errors;
};
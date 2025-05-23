export const foodValidation = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.description.trim()) {
    errors.description = "Description is required";
  }

  if (isNaN(values.price)) {
    errors.price = "Price must be a valid number";
  } else if (Number(values.price) <= 0) {
    errors.price = "Price must be greater than zero";
  }

  if (!values.imageUrl.trim()) {
    errors.imageUrl = "Image URL is required";
  } else {
    try {
      new URL(values.imageUrl);
    } catch (e) {
      errors.imageUrl = "Invalid URL";
    }
  }

  if (!Array.isArray(values.ingredients) || values.ingredients.length === 0) {
    errors.ingredients = "At least one ingredient is required";
  } else if (values.ingredients.filter((item) => !item.trim()).length > 0) {
    errors.ingredients = "All ingredients must be filled";
  }

  return errors;
};

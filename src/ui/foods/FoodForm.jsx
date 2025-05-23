"use client";

import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import axios from "axios";
import { useRouter } from "next/navigation";

const FoodForm = ({ form, onSubmit, onDelete, isEdit = false }) => {
  const router = useRouter();
  const {
    handleChange,
    handleSubmit,
    values,
    handleChangeArray,
    handleAddArrayItem,
    errors,
    handleDeleteArrayItem,
  } = form;

  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleSubmitForm = async () => {
    setLoading(true);
    await onSubmit();
    setLoading(false);
  };

  const handleDeleteForm = async () => {
    setLoading(true);
    await onDelete();
    setLoading(false);
  };

  return (
    <form
      className="bg-white shadow p-6 flex flex-col gap-6 items-center mt-4"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      {imageError || !values.imageUrl.trim() ? (
        <div className="w-48 h-48 bg-gray-400 flex justify-center items-center">
          <p>Image not valid</p>
        </div>
      ) : (
        <img
          src={values.imageUrl}
          alt="food-image"
          className="w-48 h-48 object-cover"
          onError={() => setImageError(true)}
        />
      )}
      <Input
        name="name"
        onChange={handleChange}
        value={values.name}
        label="Name"
        error={errors.name}
      />
      <Input
        name="description"
        onChange={handleChange}
        value={values.description}
        label="Description"
        error={errors.description}
      />
      <Input
        name="price"
        onChange={handleChange}
        value={values.price}
        label="Price"
        error={errors.price}
      />
      <Input
        name="imageUrl"
        onChange={handleChange}
        value={values.imageUrl}
        label="Image URL"
        error={errors.imageUrl}
      />
      <div className="w-full">
        {form.values.ingredients.map((item, index) => (
          <div className="flex gap-2 items-end  " key={index}>
            <Input
              name="ingredients"
              value={item}
              label={index === 0 ? "Ingredients" : null}
              onChange={handleChangeArray}
              index={index}
            />
            <input
              name="ingredients"
              onClick={handleDeleteArrayItem}
              data-index={index}
              type="button"
              value="Delete"
              className="bg-red-500 text-white cursor-pointer px-3 py-1"
            />
          </div>
        ))}
        <div className="flex justify-end mt-2">
          <input
            value="Add +"
            type="button"
            className="px-4 py-1 bg-gray-300 cursor-pointer"
            onClick={handleAddArrayItem}
            name="ingredients"
          />
        </div>
        {errors.ingredients && (
          <p className="text-xs text-red-500 italic">{errors.ingredients}</p>
        )}
      </div>
      {loading ? (
        <p>loading...</p>
      ) : isEdit ? (
        <div className="flex gap-4 w-full">
          <Button
            title="Delete"
            className="bg-red-500! flex-0"
            onClick={handleDeleteForm}
          />
          <Button title="Update" type="submit" className="w-full flex-1" />
        </div>
      ) : (
        <Button title="Add" type="submit" />
      )}
    </form>
  );
};

export default FoodForm;

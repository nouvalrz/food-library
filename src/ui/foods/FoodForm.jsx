"use client";

import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useRouter } from "next/navigation";
import BaseCard from "../BaseCard";

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
    <BaseCard className="p-5">
      <form
        className="flex flex-col gap-6 items-center mt-4"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        {imageError || !values.imageUrl.trim() ? (
          <div className="w-48 h-48 bg-gray-100 flex justify-center items-center rounded-lg">
            <p>Image not valid</p>
          </div>
        ) : (
          <img
            src={values.imageUrl}
            alt="food-image"
            className="w-56 h-56 object-cover rounded-lg"
            onError={() => setImageError(true)}
          />
        )}
        <Input
          name="name"
          onChange={handleChange}
          value={values.name}
          label="Nama"
          error={errors.name}
        />
        <Input
          name="description"
          onChange={handleChange}
          value={values.description}
          label="Deskripsi"
          error={errors.description}
        />
        <Input
          name="price"
          onChange={handleChange}
          value={values.price}
          label="Harga"
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
                label={index === 0 ? "Bahan" : null}
                onChange={handleChangeArray}
                index={index}
              />
              <input
                name="ingredients"
                onClick={handleDeleteArrayItem}
                data-index={index}
                type="button"
                value="Hapus Bahan"
                className="bg-gray-100 cursor-pointer px-3 py-1 rounded"
              />
            </div>
          ))}
          <div className="flex justify-end mt-4">
            <input
              value="Tambah Bahan +"
              type="button"
              className="px-4 py-1 bg-gray-100 cursor-pointer rounded"
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
              title="Hapus"
              className="bg-red-500! flex-0"
              onClick={handleDeleteForm}
            />
            <Button title="Perbarui" type="submit" className="w-full flex-1" />
          </div>
        ) : (
          <Button title="Simpan" type="submit" />
        )}
      </form>
    </BaseCard>
  );
};

export default FoodForm;

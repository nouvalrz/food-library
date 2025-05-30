"use client";

import useForm from "@/hooks/useForm";
import FoodForm from "@/ui/foods/FoodForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { foodValidation } from "@/lib/foods/foodValidation";
import Modal from "@/ui/Modal";
import "react-responsive-modal/styles.css";
import { useState } from "react";
import Button from "@/ui/Button";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const FoodDetailClient = ({ foodDetail }) => {
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const router = useRouter();
  const form = useForm(
    {
      id: foodDetail.id,
      name: foodDetail.name || "",
      description: foodDetail.description || "",
      imageUrl: foodDetail.imageUrl || "",
      ingredients: foodDetail.ingredients || [""],
      price: foodDetail.price || "",
    },
    foodValidation
  );

  const toggleModalDelete = () => {
    setModalDeleteOpen(!modalDeleteOpen);
  };

  const updateFood = async () => {
    try {
      const response = await fetch("/api/update-food/" + form.values.id, {
        method: "POST",
        body: JSON.stringify({
          ...form.values,
          price: Number(form.values.price),
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          Array.isArray(error.errors)
            ? error.errors.join(", ")
            : error.errors || error.message || "Something went wrong"
        );
      }

      toast.success("Berhasil memperbarui makanan!");
      router.refresh();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteFood = async () => {
    setDeleteLoading(true);
    try {
      const response = await fetch("/api/delete-food/" + form.values.id, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          Array.isArray(error.errors)
            ? error.errors.join(", ")
            : error.errors || error.message || "Something went wrong"
        );
      }

      toast.success("Makanan berhasil dihapus!");
      router.replace("/foods");
    } catch (error) {
      toast.error(error.message);
    }
    setDeleteLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <Link
        href="/foods"
        className="bg-gray-100 px-3 py-1 rounded inline-flex gap-1  mb-4"
      >
        <ArrowLeft className="size-4" />
        Kembali
      </Link>
      <h1 className="text-center text-2xl font-semibold my-6">Edit Resep</h1>
      <FoodForm
        form={form}
        onSubmit={updateFood}
        onDelete={toggleModalDelete}
        isEdit
      />

      <Modal open={modalDeleteOpen} onClose={toggleModalDelete}>
        <h1 className="font-medium">Konfirmasi</h1>
        <p className="mt-4">
          Apakah anda yakin menghapus{" "}
          <span className="font-medium">{foodDetail.name}</span>?
        </p>
        <Button
          title="Yakin"
          className="w-auto! mt-4"
          onClick={deleteFood}
          loading={deleteLoading}
        />
      </Modal>
    </div>
  );
};

export default FoodDetailClient;

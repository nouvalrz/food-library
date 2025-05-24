"use client";

import useForm from "@/hooks/useForm";
import FoodForm from "@/ui/foods/FoodForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { foodValidation } from "@/lib/foods/foodValidation";

const FoodDetailClient = ({ foodDetail }) => {
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

      // router.refresh();
      alert("Food updated successfully");
      window.location.reload(); // hard reload
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteFood = async () => {
    if (!confirm("Are you sure want to delete this food?")) {
      return;
    }

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

      // router.refresh();
      alert("Food deleted successfully");
      router.replace("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <Link href="/" className="bg-gray-300 px-3 py-1">
        Back to home
      </Link>
      <FoodForm
        form={form}
        onSubmit={updateFood}
        onDelete={deleteFood}
        isEdit
      />
    </div>
  );
};

export default FoodDetailClient;

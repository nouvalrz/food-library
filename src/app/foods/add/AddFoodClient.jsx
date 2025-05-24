"use client";
import useForm from "@/hooks/useForm";
import { foodValidation } from "@/lib/foods/foodValidation";
import FoodForm from "@/ui/foods/FoodForm";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const foodInitialValues = {
  name: "",
  description: "",
  price: "",
  imageUrl: "",
  ingredients: [""],
};

const AddFoodClient = () => {
  const router = useRouter();
  const form = useForm(foodInitialValues, foodValidation);

  const addFood = async () => {
    try {
      const response = await fetch("/api/create-food", {
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
      toast.success("Berhasil menambah makanan!");
      router.replace("/foods");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="my-12">
      <div className="max-w-2xl mx-auto">
        <FoodForm form={form} onSubmit={addFood} />
      </div>
    </div>
  );
};

export default AddFoodClient;

import FoodCard from "@/ui/foods/FoodCard";
import React from "react";

const page = async () => {
  const response = await fetch("http://localhost:3000/api/foods");
  const foods = (await response.json()).data;

  return (
    <div className="flex flex-col items-center my-8">
      <div className="text-center my-10">
        <h1 className="font-bold text-3xl">Food Library 🍽️</h1>
        <p>Everything About Food, All in One Place.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {foods.map((food, index) => (
          <FoodCard food={food} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;

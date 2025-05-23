import React from "react";
import FoodDetailClient from "./FoodDetailClient";

const page = async ({ params }) => {
  const { id } = params;

  const response = await fetch("http://localhost:3000/api/foods/" + id);
  const foodDetail = (await response.json()).data;

  return (
    <div className="my-12">
      <FoodDetailClient foodDetail={foodDetail} key={foodDetail.id} />
    </div>
  );
};

export default page;

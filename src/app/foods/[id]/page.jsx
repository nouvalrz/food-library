import React from "react";
import FoodDetailClient from "./FoodDetailClient";
import { cookies } from "next/headers";
import { API_URL, API_KEY } from "@/lib/api";

const page = async ({ params }) => {
  const { id } = await params;
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;
  const response = await fetch(API_URL + "/foods/" + id, {
    method: "GET",
    headers: {
      apiKey: API_KEY,
      Authorization: `Bearer ${token}`,
    },
  });

  const foodDetail = (await response.json()).data;

  return (
    <div className="my-12">
      <FoodDetailClient foodDetail={foodDetail} key={foodDetail.id} />
    </div>
  );
};

export default page;

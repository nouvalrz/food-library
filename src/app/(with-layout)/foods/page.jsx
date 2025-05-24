import { API_KEY, API_URL } from "@/lib/api";
import FoodCard from "@/ui/foods/FoodCard";
import { cookies } from "next/headers";

const page = async () => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;
  const response = await fetch(API_URL + "/foods", {
    method: "GET",
    headers: {
      apiKey: API_KEY,
      Authorization: `Bearer ${token}`,
    },
  });

  const foods = (await response.json()).data;

  return (
    <div className="flex flex-col items-center my-8">
      <div className="text-center my-10">
        <h1 className="font-bold text-3xl">KokiRumahan</h1>
        <p>Semua resep ada disini</p>
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

import React from "react";
import RecipeCompactCard from "./RecipeCompactCard";

const recommendationFoods = [
  {
    name: "Sate Ayam\nBumbu Kacang",
    imageUrl: "/images/recommendation-satay.webp",
    likesCount: 512,
  },
  {
    name: "Bakso Ayam\nKuah Kaldu",
    imageUrl: "/images/recommendation-bakso.webp",
    likesCount: 256,
  },
  {
    name: "Nasi Goreng\nSpesial Pedas",
    imageUrl: "/images/recommendation-nasi.webp",
    likesCount: 128,
  },
  {
    name: "Soto Ayam\nKuah Santan",
    imageUrl: "/images/recommendation-soto.webp",
    likesCount: 64,
  },
];

const Recommendation = () => {
  return (
    <div className="flex flex-col items-center my-18">
      <h2 className="text-2xl font-semibold">Resep Paling Populer</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 md:gap-6 lg:gap-12 mt-10">
        {recommendationFoods.map((food, index) => (
          <RecipeCompactCard food={food} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Recommendation;

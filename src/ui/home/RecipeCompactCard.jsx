import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

const RecipeCompactCard = ({ food }) => {
  const { name, imageUrl, likesCount } = food;
  return (
    <div className="rounded-xl bg-gray-100 p-5">
      <h3 className="text-xl font-semibold whitespace-pre-line">{name}</h3>
      <div className="w-full h-[380px] rounded-lg relative overflow-clip mt-3">
        <span className="flex gap-1 items-center bg-white rounded-full px-3 py-1 shadow absolute top-2 right-2 z-10 text-xs">
          <Heart className="size-4" />
          <p>{likesCount}</p>
        </span>
        <Image
          src={imageUrl}
          fill
          alt="recipe-recommendation"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default RecipeCompactCard;

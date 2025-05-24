import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
  const { id, name, description, imageUrl } = food;
  return (
    <div className="p-5 bg-gray-100 flex flex-col gap-3 rounded-xl">
      <h3 className="text-xl font-semibold whitespace-pre-line capitalize line-clamp-1">
        {name}
      </h3>
      <img
        src={imageUrl}
        alt={`${name} image`}
        className="w-full h-[380px] object-cover rounded-lg"
      />
      <p className="mt-1 capitalize line-clamp-1">{description}</p>
      <Link href={"/foods/" + id}>
        <button className="bg-gray-900 text-white font-semibold w-full py-2 rounded-full flex gap-2 items-center justify-center cursor-pointer">
          <p>Lihat resep</p>
          <ArrowRight className="size-4" />
        </button>
      </Link>
    </div>
  );
};

export default FoodCard;

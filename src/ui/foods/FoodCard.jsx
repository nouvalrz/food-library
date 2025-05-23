import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
  const { id, name, description, imageUrl } = food;
  return (
    <Link href={"/foods/" + id}>
      <div className="p-5 bg-white shadow flex flex-col items-center gap-2 cursor-pointer">
        <img
          src={imageUrl}
          alt={`${name} image`}
          className="w-full h-[200px] object-cover"
        />
        <div className="text-center">
          <h2 className="font-semibold">{name}</h2>
          <p className="mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;

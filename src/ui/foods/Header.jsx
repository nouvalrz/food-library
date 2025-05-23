import Link from "next/link";
import React from "react";
import Button from "../Button";

const Header = () => {
  return (
    <div className="w-full fixed top-0 left-0 p-4 bg-amber-500 text-white justify-between flex items-center">
      <Link href="/">
        <p className="font-semibold text-base">Food Library 🍽️</p>
      </Link>
      <Link href="/foods/add">
        <Button title="Add Food" className="bg-white! text-gray-800!" />
      </Link>
    </div>
  );
};

export default Header;

"use client";

import Link from "next/link";
import React from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Header = ({ loggedIn }) => {
  const pathname = usePathname();
  return (
    <div className="w-full fixed top-0 left-0 py-4 px-8 bg-white justify-between flex items-center z-50">
      <Link href="/">
        <div className="flex gap-2 items-center">
          <img src="./koki-rumahan-logo.svg" className="w-8 h-8" />
          <p className="font-[Quicksand] font-semibold">KokiRumahan</p>
        </div>
      </Link>

      <div className="flex gap-4 md:gap-8 lg:gap-12 items-center">
        <Link
          href="/"
          className={clsx({
            "text-amber-500 font-semibold underline": pathname === "/",
          })}
        >
          Home
        </Link>
        <Link
          href="/foods"
          className={clsx({
            "text-amber-500 font-semibold underline": pathname === "/foods",
          })}
        >
          Foods
        </Link>
      </div>

      {loggedIn ? (
        <Link href="/foods/add">
          <Button title="Add Food" className="bg-amber-500!" />
        </Link>
      ) : (
        <Link href="/login">
          <Button title="Login" className="bg-amber-500!" />
        </Link>
      )}
    </div>
  );
};

export default Header;

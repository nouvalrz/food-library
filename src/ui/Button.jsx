"use client";

import clsx from "clsx";
import { Loader2 } from "lucide-react";
import React from "react";

const Button = ({ title, type = "button", onClick, loading, className }) => {
  return (
    <button
      type={type}
      onClick={!loading ? onClick : null}
      disabled={loading}
      className={clsx(
        "bg-amber-500 text-white font-semibold p-2 cursor-pointer w-full rounded hover:bg-amber-600 transition flex justify-center items-center disabled:cursor-not-allowed",
        className
      )}
    >
      {loading ? (
        <div className="flex gap-1 items-center">
          <Loader2 className="animate-spin size-5" /> <p>Loading</p>
        </div>
      ) : (
        <p>{title}</p>
      )}
    </button>
  );
};

export default Button;

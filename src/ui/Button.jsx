import clsx from "clsx";
import React from "react";

const Button = ({ title, type = "button", onClick, loading, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={clsx(
        "bg-amber-500 text-white font-medium p-2 cursor-pointer w-full",
        className
      )}
    >
      {title}
    </button>
  );
};

export default Button;

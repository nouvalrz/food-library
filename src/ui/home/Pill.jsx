import React from "react";

const Pill = ({ children }) => {
  return (
    <span className="flex gap-1 items-center bg-gray-100 px-5 py-2 rounded-full text-xs font-medium">
      {children}
    </span>
  );
};

export default Pill;

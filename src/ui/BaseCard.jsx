import React from "react";
import clsx from "clsx";
const BaseCard = ({ children, className, ...props }) => {
  return (
    <div className={clsx("bg-white rounded-lg shadow", className)} {...props}>
      {children}
    </div>
  );
};

export default BaseCard;

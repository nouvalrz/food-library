import clsx from "clsx";
import { useId } from "react";

const Input = ({
  type,
  name,
  placeholder,
  className,
  label,
  error,
  onChange,
  value,
  index,
}) => {
  const id = useId();
  return (
    <div className="w-full text-sm">
      <label htmlFor={id}>{label}</label>
      <input
        data-index={index}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        className={clsx(
          "block border border-gray-300 w-full p-2 mt-1",
          className
        )}
      />
      {error && <p className="text-red-500 italic mt-1 text-xs">{error}</p>}
    </div>
  );
};

export default Input;

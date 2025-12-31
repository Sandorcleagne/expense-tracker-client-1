import React, { InputHTMLAttributes, ReactNode } from "react";
type InputSize = "sm" | "md";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  InputSize?: InputSize;
  withIcon?: ReactNode;
  error?: string;
}
const sizeClasses: Record<InputSize, string> = {
  sm: "p-2 text-sm",
  md: "p-3 text-base",
};
const InputFeild: React.FC<CustomInputProps> = ({
  InputSize = "md",
  withIcon,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col w-full">
      <div
        className={`flex items-center border rounded-md focus-within:ring-2 focus-within:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        } ${sizeClasses[InputSize]} ${className}`}
      >
        {withIcon && <span className="mr-2">{withIcon}</span>}
        <input className="flex-1 outline-none bg-transparent" {...props} />
      </div>
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default InputFeild;

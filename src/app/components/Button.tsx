"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  text?: string;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: "default" | "icon";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  text,
  size = "md",
  icon,
  iconPosition = "left",
  variant = "default",
  onClick,
  className,
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-3xl font-medium transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const variantStyles = {
    default: "bg-(--theme-color) text-white hover:opacity-90",
    icon: "p-2 bg-(--theme-color) text-white rounded-full hover:opacity-90",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variant === "icon" ? variantStyles.icon : variantStyles.default,
        variant !== "icon" && sizeStyles[size],
        className
      )}
    >
      {/* Icon on left */}
      {icon && iconPosition === "left" && icon}

      {/* Text */}
      {variant !== "icon" && text}

      {/* Icon on right */}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;

//  <Button text="Join Now" />

//             <Button size="md" text="Save" />

//             <Button icon={<Menu />} text="Menu" iconPosition="left" />

//             <Button icon={<Menu />} variant="icon" />

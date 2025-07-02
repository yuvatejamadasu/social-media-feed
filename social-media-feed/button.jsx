import React from "react";

export const Button = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  let base = "inline-flex items-center justify-center font-medium rounded-full focus:outline-none transition shadow-sm";
  let variantClass =
    variant === "ghost"
      ? "bg-transparent text-blue-600 hover:bg-blue-50 border border-transparent"
      : "bg-blue-600 text-white hover:bg-blue-700 border border-blue-600";
  let sizeClass =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : size === "icon"
      ? "p-2"
      : "px-5 py-2";
  return (
    <button className={`${base} ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
}; 
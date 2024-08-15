import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { forwardRef } from "react";
const Input = forwardRef(function Input(
  { label, placeholder, type = "text", ...props },
  ref
) {
  const id = nanoid()
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-2 font-bold text-gray-700" htmlFor={id}>{label}</label>}
      <input
      key={id}
      id={id}
      ref={ref}
        type={type}
        placeholder={placeholder}
        className="hover:cursor-pointer px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
});

export default Input;

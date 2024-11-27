import React from "react";

function InputForm({ name, label, type, handleChange }) {
  return (
    <>
      <label for={name} className="block">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        className="border border-gray-200 w-full rounded-md h-8 my-1 focus:outline-none hover:outline-none focus:ring-red-300 focus:ring-1 p-2"
      />
    </>
  );
}

export default InputForm;

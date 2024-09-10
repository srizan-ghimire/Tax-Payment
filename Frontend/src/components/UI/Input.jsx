import React from "react";

const Input = ({ label, important, sx, error, placeholder }) => {
  return (
    <div className="my-4">
      <label
        htmlFor={label}
        className="opacity-75 ml-3 text-xl font-medium mr-1"
      >
        {label}
      </label>
      <span
        className={`relative right-1 bottom-1 ${important && "text-red-600"}`}
      >
        *
      </span>

      <input
        type={"text"}
        placeholder={placeholder}
        autoComplete="off"
        id={label}
        className="min-w-80 py-2 px-3 ml-3 rounded-sm bg-[#33303010] shadow-md focus:outline-none focus:border-cyan-400 focus:border-b-2"
        style={sx}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;

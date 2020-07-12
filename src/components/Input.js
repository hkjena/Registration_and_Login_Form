import React from "react";

const Input = ({
  name,
  placeholder,
  label,
  type,
  svg,
  error,
  onChange,
  value
}) => {
  return (
    <>
      <div className="flex flex-col mb-4">
        <label
          htmlFor="name"
          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
        >
          {label}
        </label>

        <div className="relative">
          <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
            <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
              {svg}
            </div>
          </div>

          <input
            name={name}
            type={type}
            placeholder={placeholder}
            // value={value}
            onChange={onChange}
            required
            className="text-sm sm:text-base relative w-full border rounded placeholder-green-400 focus:border-green-400 focus:outline-none py-2 pr-2 pl-12"
          />
        </div>
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {error}
        </span>
      </div>
    </>
  );
};

export default Input;

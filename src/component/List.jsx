import React from "react";

export const List = ({name, price, description}) => {
    
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <img src="{image}" alt="{name}" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-lg">${price}</p>
        <p className="mt-2 text-gray-700">{description}</p>
        <button className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200">
          Add to cart
        </button>
      </div>
    </div>
  );
};

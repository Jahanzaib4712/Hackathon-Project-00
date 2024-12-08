// src/components/TopCategories.tsx

import React from "react";

const TopCategories: React.FC = () => {
  return (
    <section className="py-16 bg-purple-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-purple-700 text-center mb-10">
          Top Categories
        </h2>
        <div className="flex space-x-6 overflow-x-scroll scrollbar-hide">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 text-center min-w-[200px]"
              >
                <img
                  src={`/product-${index + 1}.png`}
                  alt={`Product ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-gray-800 font-semibold">
                  Mini LCW Chair
                </h3>
                <p className="text-gray-500">$56.00</p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 text-sm rounded shadow-md hover:bg-green-600">
                  View Shop
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;

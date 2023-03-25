import React from "react";
import ProductCard from "./ProductCard";

export default function Products({ products }) {
  return (
    <>
      <div className="py-20">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
            Shopping Everyday
          </h1>
          <span className="w-20 h-[3px] bg-black"></span>
          <p className="max-w-[700px] text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            et explicabo facilis rerum modi blanditiis delectus harum reiciendis
            reprehenderit magnam repudiandae odit, aliquid repellat laudantium
            voluptas? Sapiente, non.
          </p>
        </div>

        <div className="pt-5 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

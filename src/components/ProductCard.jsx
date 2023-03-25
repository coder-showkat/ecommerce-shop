import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../utilities/addToCart";

export default function ProductCard({ product }) {
  const { image, title, oldPrice, price, category, isNew } = product;
  const navigate = useNavigate();

  const [hover, setHover] = useState(false);

  const handleDetails = () => {
    const id = title.split(" ").join("-").toLowerCase();
    navigate(`/product/${id}`, {
      state: product,
    });
  };
  return (
    <div
      className="relative h-full border rounded-lg flex flex-col justify-between gap-2"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className="w-full h-96 overflow-hidden cursor-pointer"
        onClick={handleDetails}
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover hover:scale-105 duration-300"
        />
      </div>
      <div className="p-4 pt-0">
        <div className="flex justify-between gap-4">
          <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <div className="w-28 self-end flex-shrink-0 overflow-hidden">
            <div
              className={`flex w-56 justify-between relative duration-500 cursor-pointer ${
                hover ? "-left-28" : "left-0"
              }`}
            >
              <div className="flex gap-4">
                <p className="font-normal text-gray-500 line-through dark:text-gray-400">
                  ${oldPrice}
                </p>
                <p className="text-gray-800 dark:text-gray-400 font-bold">
                  ${price}
                </p>
              </div>
              <p
                className="whitespace-nowrap flex gap-2 font-semibold items-center duration-300 text-gray-600 hover:text-black"
                onClick={() => addToCart(image, title, price, 1)}
              >
                <span>Add to card</span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </p>
            </div>
          </div>
        </div>
        <p>{category}</p>
        <div className="absolute top-4 right-0">
          {isNew && (
            <p className="bg-black text-gray-100 font-semibold font-titleFont px-6 py-1">
              sale
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

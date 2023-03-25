import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addToCart } from "../utilities/addToCart";

export default function Product() {
  const Location = useLocation();
  const [details, setDetails] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    setDetails(Location.state);
  }, []);

  const { image, isNew, title, oldPrice, price, description, category } =
    details;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 py-6 px-4 gap-y-6 sm:gap-y-0 sm:gap-x-6 max-w-screen-2xl mx-auto">
      <div className="relative col-span-1">
        <img src={image} alt="" className="w-full" />
        <div className="absolute top-4 right-0">
          {isNew && (
            <p className="bg-black text-gray-100 font-semibold font-titleFont px-6 py-1">
              Sale
            </p>
          )}
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-8 justify-center">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="flex gap-3 items-center mt-2">
            <p className="font-normal text-gray-500 line-through dark:text-gray-400">
              ${oldPrice}
            </p>
            <p className="text-gray-800 text-lg dark:text-gray-400 font-bold">
              ${price}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </div>
          <p>(1 Customer review)</p>
        </div>

        <p className="max-w-3xl">{description}</p>

        <div className="flex gap-4">
          <div className="border-[2px] py-1 px-2 flex gap-3 items-center">
            <p className="pr-2">Quantity</p>
            <button
              className="border w-6 h-4 flex items-center justify-center font-semibold hover:bg-black hover:text-gray-100 active:bg-gray-800 duration-200"
              onClick={() => count > 1 && setCount(count - 1)}
            >
              <ion-icon name="remove-outline"></ion-icon>
            </button>
            <p>{count}</p>
            <button
              className="border w-6 h-4 flex items-center justify-center font-semibold hover:bg-black hover:text-gray-100 active:bg-gray-800 duration-200"
              onClick={() => setCount(count + 1)}
            >
              <ion-icon name="add-outline"></ion-icon>
            </button>
          </div>
          <button
            onClick={() => addToCart(image, title, price, count)}
            className="bg-black text-gray-100 font-semibold px-3 py-1 active:bg-gray-800"
          >
            add to cart
          </button>
        </div>

        <p>Category: {category}</p>
      </div>
    </div>
  );
}

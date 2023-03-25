import React from "react";
import { paymentLogo } from "../assets";

export default function Footer() {
  return (
    <div className="bg-black max-w-screen-xl mx-auto text-[#949494] py-20 font-titleFont">
      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8">
        <div className="text-gray-100 flex flex-col gap-7 items-start">
          <h1 className="flex items-center">
            <span className="text-2xl mr-2">
              <ion-icon name="cart-outline"></ion-icon>
            </span>
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              SAM
            </span>
          </h1>
          <p className="text-sm tracking-wide">© Showkat Ali Sam</p>
          <img src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-4 text-xl">
            <span className="text-gray-300 hover:text-gray-100 duration-300 cursor-pointer">
              <ion-icon name="logo-github"></ion-icon>
            </span>
            <span className="text-gray-300 hover:text-gray-100 duration-300 cursor-pointer">
              <ion-icon name="logo-facebook"></ion-icon>
            </span>
            <span className="text-gray-300 hover:text-gray-100 duration-300 cursor-pointer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </span>
            <span className="text-gray-300 hover:text-gray-100 duration-300 cursor-pointer">
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">
            locate us
          </h2>
          <div className="text-base flex flex-col gap-2 text-gray-300">
            <p>Md. Showkat Ali</p>
            <p>Mobile: 01749424840</p>
            <p>Phone: 01936485505</p>
            <p>e-mail: showkat.official2@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-100 mb-4">profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-gray-100 duration-300 cursor-pointer">
              <span className="text-lg flex justify-center items-center">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-gray-100 duration-300 cursor-pointer">
              <span className="text-lg flex justify-center items-center">
                <ion-icon name="logo-paypal"></ion-icon>
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-gray-100 duration-300 cursor-pointer">
              <span className="text-lg flex justify-center items-center">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-gray-100 duration-300 cursor-pointer">
              <span className="text-lg flex justify-center items-center">
                <ion-icon name="location-outline"></ion-icon>
              </span>
              help & support
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            type="text"
            placeholder="e-mail"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

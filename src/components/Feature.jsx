import React from "react";
import * as walletIcons from "react-icons/bs";
import * as clockIcons from "react-icons/tfi";
import * as ratingIcon from "react-icons/ai";

function Feature() {
  return (
    <div className="h-full w-full">
      <div className="max-w-screen-lg mx-auto">
        <div className="md:flex justify-between gap-24">
          <div className="shadow-md shadow-gray-500 py-4 px-4">
            <div className="text-3xl ">
              <walletIcons.BsWallet2 />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Reasonable</h1>
              <p>Lowest price with professional service delivery</p>
            </div>
          </div>
          <div className="shadow-md shadow-gray-500 py-4 px-4">
            <div className="text-3xl ">
              <clockIcons.TfiAlarmClock />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Reasonable</h1>
              <p>Lowest price with professional service delivery</p>
            </div>
          </div>
          <div className="shadow-md shadow-gray-500 py-4 px-4">
            <div className="text-3xl ">
              <ratingIcon.AiOutlineTrophy />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Reasonable</h1>
              <p>Lowest price with professional service delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;

import React from "react";

function HeroSection() {
  return (
    <div className="h-screen w-full bg-green-600">
      <div>
        <div className="max-w-screen-lg mx-auto leading-10 flex flex-col items-center justify-center h-screen px-4 md:flex-col">
          <h1 className="text-3xl text-white font-bold text-justify">
            The Simplest way to Incorporate
          </h1>
          <h1 className="text-3xl text-white font-bold text-center">
            Your Company in india.
          </h1>
          <p className="text-center text-white font-semibold">
            Begin your journey as a business owner with us
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Your Name..."
              className="rounded-l-2xl px-36 p-1 text-start outline-none border-none"
            />
            <span
              className="bg-black cursor-pointer text-white px-3 py-3 rounded-r-2xl
        "
            >
              Next
            </span>
          </div>
          <div className="md:flex gap-5 mt-5">
            <div className="flex flex-col leading-none text-white border px-6 py-3 rounded-md border-white">
              <p>GST Registration</p>
              <span>
                <strong>₹999.0</strong> / Excel GST
              </span>
            </div>
            <div className="flex flex-col leading-none text-white border px-6 py-3 rounded-md border-white">
              <p>Company Registration</p>
              <span>
                <strong>₹6141</strong> / Excel GST
              </span>
            </div>
            <div className="flex flex-col leading-none text-white border px-6 py-3 rounded-md border-white">
              <p>Trademark Registration</p>
              <span>
                <strong>₹1999</strong> / Excel GST
              </span>
            </div>
          </div>
          <p className="text-white">
            Rated 4.8 out of 5 based on Google 1376 reviews
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

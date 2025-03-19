import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp";

const FeatureCollection = () => {
  return (
    <section className="py-16 px-12 ">
      <div className="conatiner mx-auto rounded-3xl flex flex-col-reverse lg:flex-row items-center bg-green-200">
        {/* left content */}
        <div className="lg:w-1/2 p-6 text-center lg:text-left">
          <h2 className="text-gray-700  font-semibold mb-2 text-lg">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">
            Apparel made for your everyday life
          </h2>
          <p className="text-gray-600 text-lg mb-5">
            Discover high-quality, comfortable clothing that effotlessly blends
            fashion and function. Designed to make you look and feel great every
            day.
          </p>
          <Link
            to="/collections/all"
            className="px-6 text-lg py-3 text-white bg-black rounded-lg hover:bg-gray-600"
          >
            Shop Now
          </Link>
        </div>
        {/* Right content */}
        <div>
          <img
            className="lg:rounded-tr-3xl lg:rounded-br-3xl w-full h-full object-cover"
            src={featured}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureCollection;

import React from "react";
import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollection = () => {
  return (
    <section className="py-16 lg:px-8 px-8">
      <div className="container flex mx-auto flex-col md:flex-row gap-5">
        {/* womensCollection */}
        <div className="relative flex-1">
          <img
            src={womensCollectionImage}
            alt="woems-collection"
            className="w-full h-[600px]  object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* mensCollection */}
        <div className="relative flex-1">
          <img
            src={mensCollectionImage}
            alt="woems-collection"
            className="w-full h-[600px]  object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;

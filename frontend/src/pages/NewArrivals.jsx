import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NewArrivals = () => {
  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl  font-bold mb-4">Explore New Arrivals</h2>
        <p className="mb-8 text-lg text-gray-600 ">
          Discover the latest styles off the runway, freshly added to keep your
          wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Buttons  */}
        <div className="absolute  right-0 bottom-[-30px] flex space-x-2">
          <button className="p-2 rounded border bg-white text-black">
            <FiChevronLeft className="text-2xl" />
          </button>
          <button className="p-2 rounded border bg-white text-black">
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;

import React from "react";
import { HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";

const FeatureSection = () => {
  return (
    <section className="mb-5 px-10 ">
      <div className="container mx-auto bg-white grid grid-cols-1 lg:grid-cols-3 gap-8 text-center ">
        {/* feature 1 */}
        <div className="flex flex-col items-center cursor-pointer hover:bg-gray-200">
          <div className="p-4 rounded-full mb-3">
            <HiShoppingBag className="text-xl " />
          </div>
          <h2 className="tracking-tighter mb-2">FREE INTERNATIONAL SHIPPING</h2>
          <p className="text-gray-600 tracking-tighter">
            On all order over $100.00
          </p>
        </div>
        {/* feature 2 */}
        <div className="flex flex-col items-center cursor-pointer hover:bg-gray-200">
          <div className="p-4 rounded-full mb-3">
            <HiOutlineArrowPathRoundedSquare className="text-xl " />
          </div>
          <h2 className="tracking-tighter mb-2">45 DAYS RETURN</h2>
          <p className="text-gray-600 tracking-tighter">Money back guarantee</p>
        </div>
        {/* feature 3 */}
        <div className="flex flex-col items-center cursor-pointer hover:bg-gray-200">
          <div className="p-4 rounded-full mb-3">
            <HiOutlineCreditCard className="text-xl " />
          </div>
          <h2 className="tracking-tighter mb-2">SECURE CHECKOUT</h2>
          <p className="text-gray-600 tracking-tighter">
            100% secured checkout process
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

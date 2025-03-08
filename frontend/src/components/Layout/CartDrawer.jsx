import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({ cartOpen, handleDrawerToggle }) => {
  return (
    <>
      <div
        // sm:w-1/2 md:w-[30rem] it is used for responsive width styles for an element
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button  */}
        <div className="flex justify-end p-4">
          <button onClick={handleDrawerToggle}>
            <IoMdClose className="h-5 w-4 text-gray-600" />
          </button>
        </div>
        {/* Cart content with scrollable area  */}
        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          {/* Component for cart content  */}
          <CartContent />
        </div>
        {/* Checkout button fixed at the bottom  */}
        <div className="sticky bottom-0 bg-white p-4">
          <button className="text-center w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Checkout
          </button>
          <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
            Shipping, taxes and discount codes calculated at checkout.
          </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

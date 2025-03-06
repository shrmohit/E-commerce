import React from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const CartDrawer = ({ cartOpen, handleDrawerToggle }) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white z-50 ${
          cartOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={handleDrawerToggle}>
            <IoMdClose className="h-5 w-4 text-gray-600" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

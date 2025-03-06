import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container mx-auto flex justify-between items-center py-4 px-5">
          {/* left - logo */}
          <div className="hidden md:flex text-center text-2xl">
            <Link to="/">Rabbit</Link>
          </div>
          {/* Center -  Navigation link */}
          <div className=" space-x-4 text-center text-sm flex-grow ">
            <Link
              to="#"
              className=" text-gray-700 hover:text-black font-medium uppercase text-sm"
            >
              MEN
            </Link>
            <Link
              to="#"
              className=" text-gray-700 hover:text-black font-medium uppercase text-sm"
            >
              WOMEN
            </Link>
            <Link
              to="#"
              className=" text-gray-700 hover:text-black font-medium uppercase text-sm"
            >
              TOP WEAR
            </Link>
            <Link
              to="#"
              className=" text-gray-700 hover:text-black font-medium uppercase text-sm"
            >
              BOTTOM WEAR
            </Link>
          </div>

          {/* Right - Icons*/}
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="hover:text-black"
            >
              <HiOutlineUser className="h-5 w-4 text-gray-700" />
            </Link>
            <button className="relative hover:text-black">
              <HiOutlineShoppingBag className="h-5 w-4 text-gray-700" />
              {/* Bag number of items */}
              <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-1 py-0.3">
                4
              </span>
            </button>
            {/* search */}
            <button className="hidden md">
              <HiBars3BottomRight className="h-5 w-4 text-gray-700" />
            </button>
          </div>
        </div>
        <hr className="" />
      </nav>
    </>
  );
};

export default Navbar;

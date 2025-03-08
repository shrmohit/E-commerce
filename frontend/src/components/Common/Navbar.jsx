import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const handleNavDrawerToggle = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const handleDrawerToggle = () => {
    setCartOpen(!cartOpen);
  };
  return (
    <>
      <nav>
        <div className="container mx-auto flex justify-between items-center py-4 px-5">
          {/* left - logo */}
          <div>
            <Link
              to="/"
              className="text-2xl font-medium"
            >
              Rabbit
            </Link>
          </div>
          {/* Center -  Navigation link */}
          <div className="hidden md:flex space-x-6  text-sm  ">
            <Link
              to="#"
              className=" text-gray-700 hover:text-black text-center font-medium uppercase text-sm"
            >
              MEN
            </Link>
            <Link
              to="#"
              className=" text-gray-700 text-center hover:text-black font-medium uppercase text-sm"
            >
              WOMEN
            </Link>
            <Link
              to="#"
              className=" text-gray-700 text-center hover:text-black font-medium uppercase text-sm"
            >
              TOP WEAR
            </Link>
            <Link
              to="#"
              className=" text-gray-700 text-center hover:text-black font-medium uppercase text-sm"
            >
              BOTTOM WEAR
            </Link>
          </div>

          {/* Right - Icons*/}
          <div className="flex items-center space-x-4">
            <Link to="/profile">
              <HiOutlineUser className="h-5 w-4 text-gray-700 hover:text-black" />
            </Link>
            <button
              onClick={handleDrawerToggle}
              className="relative"
            >
              <HiOutlineShoppingBag className="h-5 w-4 text-gray-500  hover:text-black" />
              {/* Bag number of items */}
              <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-1 py-0.3">
                4
              </span>
            </button>
            {/* search */}
            <div className="overflow-hidden">
              <SearchBar />
            </div>

            <button
              className="flex items-center space-x-4 md:hidden"
              onClick={handleNavDrawerToggle}
            >
              <HiBars3BottomRight className="h-6 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </nav>
      <CartDrawer
        cartOpen={cartOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* mobilenavigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50
        ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={handleNavDrawerToggle}>
            <IoMdClose className="h-5 w-4 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={handleNavDrawerToggle}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={handleNavDrawerToggle}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={handleNavDrawerToggle}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={handleNavDrawerToggle}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

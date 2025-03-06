import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className="bg-rabbit-red text-white ">
      <div className="container mx-auto flex justify-between items-center py-2 px-3">
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="hover:text-gray-300"
          >
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
          >
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
          >
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>
        <div className="text-center text-sm flex-grow">
          <span>We ship worldwide -- Fast and reliable shipping!</span>
        </div>
        <div>
          <a
            href="tel:+1234567890"
            className="hidden md:flex hover:text-gray-300"
          >
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

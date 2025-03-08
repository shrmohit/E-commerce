import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-gray-800 mb-4 text-lg">Newletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products,exclusive events, and online
            offers.
          </p>
          <p className="text-gray-600 text-sm font-medium mb-6">
            Sign up and get 10% off your first order.
          </p>
          {/* form  */}
          <form className="flex">
            <input
              type="email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 roundedd-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* shop links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                to="/"
                className="hover:text-gray-500 transition-colors"
              >
                Men's top Wear
              </Link>
            </li>
            <li>
              <Link
                Link
                to="/"
                className="hover:text-gray-500 transition-colors"
              >
                Women's top Wear
              </Link>
            </li>
            <li>
              <Link
                Link
                to="/"
                className="hover:text-gray-500 transition-colors"
              >
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link
                Link
                to="/"
                className="hover:text-gray-500 transition-colors"
              >
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links  */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                to="/"
                className="hover:text-gray-500 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                Link
                to="/"
                className="hover:text-gray-500 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                Link
                to="/"
                className="hover:text-gray-500 transition-colors"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                Link
                to="/"
                className="hover:text-gray-500 transition-colors"
              >
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow us  */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <RiTwitterXLine className="h-4 w-4" />
            </a>
          </div>
          <p className="text-lg text-gray-800 mb-4">Call Us</p>
          <p>
            <FiPhoneCall className="inline-block mr-2" />
            +1 (234) 567-890
          </p>
        </div>
      </div>
      {/* Footer Bottom  */}
    </footer>
  );
};

export default Footer;

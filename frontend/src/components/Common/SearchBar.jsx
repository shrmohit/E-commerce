import React from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  const handleSearchToggle = () => {
    setIsOpened(!isOpened);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Term: ", searchTerm);
    setIsOpened(false);
  };
  return (
    <div
      className={`flex items-center justify-center w-full  transition-all duration-300 ${
        isOpened ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : " w-auto"
      }`}
    >
      {isOpened ? (
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            {/* search icon */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 text-gray-600 transform -translate-y-1/2 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-5 w-5" />
            </button>
          </div>
          {/* close button */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 "
          >
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        // search icon
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="text-gray-500 hover:text-black h-5 w-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOption from "../components/Products/SortOption";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const SidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    //close sidebar if clicked outside
    if (SidebarRef.current && SidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };
  // check on side to close sidebar
  useEffect(() => {
    // add Event Listner for clicks
    document.addEventListener("mousedown", handleClickOutside);
    // clean enent listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          id: 1,
          name: "Classic Oxford button Down",
          price: 19.23,
          image: [{ url: "https://picsum.photos/500/500/?random=9" }],
        },
        {
          id: 2,
          name: "Classic Oxford button Down",
          price: 19.23,
          image: [{ url: "https://picsum.photos/500/500/?random=7" }],
        },
        {
          id: 3,
          name: "Classic Oxford button Down",
          price: 19.23,
          image: [{ url: "https://picsum.photos/500/500/?random=8" }],
        },
        {
          id: 4,
          name: "Classic Oxford button Down",
          price: 19.23,
          image: [{ url: "https://picsum.photos/500/500/?random=6" }],
        },
        {
          id: 5,
          name: "Classic Oxford button Down",
          price: 19.23,
          image: [{ url: "https://picsum.photos/500/500/?random=5" }],
        },
        {
          id: 6,
          name: "Classic Oxford button Down",
          price: 19.23,
          image: [{ url: "https://picsum.photos/500/500/?random=4" }],
        },
        {
          id: 7,
          name: "Classic Oxford button Down",
          price: 19.23,
          image: [{ url: "https://picsum.photos/500/500/?random=3" }],
        },
        {
          id: 8,
          name: "Classic Oxford button Down",
          price: 19.23,
          image: [{ url: "https://picsum.photos/500/500/?random=2" }],
        },
      ];
      setProducts(fetchedProducts);
    }, 500);
  }, []);
  return (
    <div className=" flex flex-col lg:flex-row ">
      {/* Mobile Filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center font-semibold text-gray-900
    "
      >
        Filter
        <FaFilter className="ml-2" />
      </button>

      {/* Filter Sidebar */}
      <div
        ref={SidebarRef}
        className={`fixed  left-0 w-60 inset-y-0 overflow-y-auto h-full bg-white transition-transform duration-300 z-50 lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All collection</h2>

        {/* sort option */}
        <SortOption />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;

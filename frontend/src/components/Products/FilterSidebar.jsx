import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  // x.com/?a=1&b=2
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: " ",
    size: "",
    material: "",
    brand: "",
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categorys = [" Top Wear", "Bottom Wear"];

  const colors = [
    "red",
    "Blue",
    "Black",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];

  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];

  const genders = [" Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    // {category : 'Top Wear', maxPrice: 100 } => params.category

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log({ name, value, checked, type });

    // multiple value store on click so create copy of the filter
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value]; //Add to array
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value); //Remove from array
      }
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    console.log(newFilters);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categorys.map((category) => (
          <div
            key={category}
            className="flex items-center mb-1"
          >
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              className="h-4 w-4 mr-2 text-blue-500 cursor-pointer focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div
            key={gender}
            className="flex items-center mb-1"
          >
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              className="h-4 w-4 mr-2 text-blue-500 cursor-pointer focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        {colors.map((color) => (
          <button
            key={color}
            name="color"
            value={color}
            onChange={handleFilterChange}
            className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105"
            style={{ backgroundColor: color.toLowerCase() }}
          ></button>
        ))}
      </div>

      {/* Size Filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div
            key={size}
            className="flex items-center mb-1"
          >
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              className="h-4 w-4 mr-2 text-blue-500 cursor-pointer focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div
            key={material}
            className="flex items-center mb-1"
          >
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              className="h-4 w-4 mr-2 text-blue-500 cursor-pointer focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div
            key={brand}
            className="flex items-center mb-1"
          >
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              className="h-4 w-4 mr-2 text-blue-500 cursor-pointer focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Filter */}
      <div className="mb-8 ">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>

        <input
          type="range"
          name="priceRange"
          value={priceRange}
          onChange={handleFilterChange}
          min={0}
          max={100}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;

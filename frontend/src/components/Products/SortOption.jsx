import React from "react";
import { useSearchParams } from "react-router-dom";

const SortOption = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };
  return (
    <div className="flex justify-end ">
      <select
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || ""}
        className="border- p-2 rounded-md focus:outline-none"
        id="sort"
      >
        <option value="sort">Default</option>
        <option value="priceAsc">Price: Low to Higher</option>
        <option value="priceDesc">Price: Higher to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortOption;

import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../pages/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />
      {/* Best seller */}
      <h2 className="text-center font-bold mb-4 text-3xl">Best Seller</h2>
      <ProductDetails />
    </div>
  );
};

export default Home;

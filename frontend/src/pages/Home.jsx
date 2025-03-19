import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../pages/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeatureCollection from "../components/Products/FeatureCollection";

const Home = () => {
  const placeholderproducts = [
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
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />
      {/* Best seller */}
      <h2 className="text-center font-bold mb-4 text-3xl">Best Seller</h2>
      <ProductDetails />
      <div className="conatiner mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderproducts} />
      </div>
      <FeatureCollection />
    </div>
  );
};

export default Home;

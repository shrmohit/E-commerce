import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product${product.id}`}
          className="block"
        >
          <div className="bg-white rounded p-6">
            <div className="w-full h-80 mb-4">
              <img
                src={product.image[0].url}
                alt={product.image[0].alText || product.name}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <p className="font-sm mb-2 ">{product.name}</p>
            <p className="text-gray-500 font-medium text-sm tracking-tighter">
              $ {product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;

import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "Product 1",
      size: "M",
      color: "red",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/500/500?random=39",
    },
    {
      productId: 1,
      name: "Product 1",
      size: "M",
      color: "red",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/500/500?random=39",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover rounded-lg"
            />
            <div className="ml-4">
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size:{product.size} | color:{product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded py-1 px-2 text-s font-medium">
                  +
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded py-1 px-2 text-s font-medium">
                  -
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>$ {product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-5 w-5 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;

import React, { useState } from "react";
const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  Description:
    "A slim-fit easy-iron shirt in women cotton fabric with a fitted " +
    "silhouette. Feature a turn-dowm collar, classic button " +
    "placket,and a yoke at the back. Long sleeves and adjustable " +
    "button cuffs with a rounded hem.",
  brand: "FshionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500/?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500/?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(selectedProduct.images[0]?.url);
  const [quantity, setquantity] = useState(1);

  const handleDecreaseing = () => {
    setquantity((prev) => (prev > 1 ? prev - 1 : 0));
  };

  const handleIncreasing = () => {
    setquantity((prev) => prev + 1);
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-30 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage == image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/*Mobile Thumbnail  */}
          <div className="md:hidden flex overflow-x-auto space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-30 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage == image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          <div>
            <div className="md:w-1/2 md:ml-10">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                {selectedProduct.name}
              </h1>
              <p className="text-lg text-gray-600 mb-1 line-through">
                {selectedProduct.originalPrice &&
                  `${selectedProduct.originalPrice}`}
              </p>
              <p className="text-xl text-gray-600 mb-4">
                $ {selectedProduct.price}
              </p>
              <p className="text-gray-600 mb-4">
                {selectedProduct.Description}
              </p>
              <div className="mb-4">
                <p className="text-gray-700">Color:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      className="w-8 h-8 rounded-full border"
                      style={{
                        backgroundColor: color.toLocaleLowerCase(),
                        filter: "brightness(0.5)",
                      }}
                    ></button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gray-700 ">Size:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border font-bold rounded-sm shadow-sm"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-2">
                <p className="text-gray-700">Quantity:</p>
                <div
                  className="flex items-center
                mt-2 gap-2"
                >
                  <button
                    onClick={handleDecreaseing}
                    className="bg-gray-400 h-8 w-6 rounded-sm font-bold"
                  >
                    -
                  </button>
                  <span className="text-center">{quantity}</span>
                  <button
                    onClick={handleIncreasing}
                    className="bg-gray-400 h-8 w-6 rounded-sm font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="py-5 w-full bg-black text-white rounded
               mt-5"
              >
                ADD TO CART
              </button>
              <div className="mt-10 text-gray-700 ">
                <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                <table className="w-full text-left text-sm text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-1 ">Brand</td>
                      <td className="py-1">{selectedProduct.brand}</td>
                    </tr>
                    <tr>
                      <td>Material</td>
                      <td>{selectedProduct.material}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

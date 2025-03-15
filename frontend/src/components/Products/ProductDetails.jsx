import React from "react";
const selectedProduct = {
  name: 120,
  originalPrice: 150,
  Description: "This is a stylish Jacket perfect for any ocasion",
  brand: "FshionBrand",
  material: "Leather",
  sizes: ["5", "M", "L", "XL"],
  color: ["Red", "Black"],
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
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg curser-pointer border"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectedProduct.images[0]?.url}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/*Mobile Thumbnail  */}
          <div>
            <div className="">
              <h3>Slim-Fit Easy Iron Shirt</h3>
              <p>$ 34.99</p>
              <p>
                A slim-fit easy-iron shirt in women cotton fabric with a fitted
                silhouette. Feature a turn-dowm collar, classic button
                placket,and a yoke at the back. Long sleeves and adjustable
                button cuffs with a rounded hem.
              </p>
              <div>
                <p>Color:</p>
              </div>
              <div>
                <p>Size:</p>
              </div>
              <div>
                <p>Quantity</p>
              </div>
              <button>ADD TO CART</button>
              <div>
                <p>Charateristics</p>
                <ul>
                  <li>Brand</li>
                  <li>Material</li>
                  <li>Urban Chic</li>
                  <li>Cotton</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

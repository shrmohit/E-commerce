import React, { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: [],
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=1",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((preData) => ({ ...preData, [name]: value }));
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };
  return (
    <div className="max-h-5xl mx-auto p-6 shadow-md rounded-md ">
      <h1 className="text-3xl font-bold mb-6">Edit Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border py-2 rounded-md border-gray-300"
            required
          />
        </div>
        {/* Description */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            rows={4}
            required
          ></textarea>
        </div>
        {/* price */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="border w-full py-2 rounded-md border-gray-300"
            required
          />
        </div>
        {/* count in stock */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Count in Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="border w-full py-2 rounded-md border-gray-300"
            required
          />
        </div>

        {/* sku */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="border w-full py-2 rounded-md border-gray-300"
            required
          />
        </div>
        {/* size */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Size (comma-separated)
          </label>
          <input
            type="text"
            name="size"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="border w-full py-2 rounded-md border-gray-300"
            required
          />
        </div>
        {/* colors */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors}
            onChange={handleChange}
            className="border w-full py-2 rounded-md border-gray-300"
            required
          />
        </div>
        {/* upload file */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Upload Image</label>
          <input
            type="file"
            onChange={handleUploadImage}
          />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 w-full py-2 rounded text-white font-bold hover:bg-green-600"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;

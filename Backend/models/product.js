const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    sku: {
      type: String,
      unique: true,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    size: {
      type: [String],
      required: true,
    },
    colors: {
      type: [string],
      required: true,
    },
    collections: {
      type: string,
      required: true,
    },
    material: {
      type: string,
      required: true,
    },
    gender: {
      type: string,
      enum: ["Men", "Women", "Unisex"],
    },
    images: [
      {
        url: {
          type: string,
          required: true,
        },
        altText: {
          type: string,
        },
      },
    ],
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
    numReview: {
      type: Number,
      default: 0,
    },
    tags: [string],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    metaTitle: {
      type: String,
    },
    metaDescription: {
      type: String,
    },
    metaKeywords: {
      type: String,
    },
    dimension: {
      length: Number,
      width: Number,
      height: Number,
    },
    weight: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

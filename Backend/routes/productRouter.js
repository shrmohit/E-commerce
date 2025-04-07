const express = require("express");
const Product = require("../models/product");
const { protect } = require("../middleware/authMiddleware");
const product = require("../models/product");

const router = express.Router();

//@route POST /api/product
//@desc Create a new product
//@access Private/Admin
router.post("/", protect, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublised,
      tags,
      dimension,
      weight,
      sku,
    } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublised,
      tags,
      dimension,
      weight,
      sku,
      user: req.user._id,
    });

    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

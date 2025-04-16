const express = require("express");
const Product = require("../models/product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

//@route POST /api/product
//@desc Create a new product
//@access Private/Admin
router.post("/", protect, admin, async (req, res) => {
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
      user: req.user._id, // Assuming you want to associate the product with the user who created it
    });

    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

//@route GET /api/product/:id
//@desc Update an existing product ID
//@access Private/Admin

router.get("/:id", protect, admin, async (req, res) => {
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

    //find product by ID
    const product = await Product.findById(req.params.id);
    if (product) {
      //update product fields
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.discountPrice = discountPrice || product.discountPrice;
      product.countInStock = countInStock || product.countInStock;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.sizes = sizes || product.sizes;
      product.colors = colors || product.colors;
      product.collections = collections || product.collections;
      product.material = material || product.material;
      product.gender = gender || product.gender;
      product.images = images || product.images;
      //isFeatured and isPublised are boolean values, so we need to check if they are defined before updating
      product.isFeatured =
        isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublised =
        isPublised !== undefined ? isPublised : product.isPublised;
      product.tags = tags || product.tags;
      product.dimension = dimension || product.dimension;
      product.weight = weight || product.weight;
      product.sku = sku || product.sku;

      //save the updated product
      const updatedProduct = await product.save();
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

//@route DELETE /api/product/:id
//@desc Delete a product by ID
//@access Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const product = await product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
module.exports = router;

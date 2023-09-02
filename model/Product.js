const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  discountPercentage: {
    type: Number,
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

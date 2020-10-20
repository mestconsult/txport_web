const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    category: String,
    productImageUrl: String
});

module.exports = mongoose.model("Product", ProductSchema);
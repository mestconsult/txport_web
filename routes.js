const express = require("express");
const products = require("./products/products");
const Product = require("./models/product");

const router = express.Router();

// This path returns a list of products
router.get("/products", (request, response) => {
    Product.find((error, data)=>{
        response.json(data);
    });
});

router.get("/products/categories/:categoryName", (request, response) => {
    Product.find({"category": request.params.categoryName},(error, data)=>{
        response.json(data);
    });
});

// This path returns a single item in the database
router.get("/products/:productId", (request, response) => {
    Product.findById(request.params.productId,(error, data)=>{
        response.json(data);
    });
});

router.post("/products", (request, response) => {
    const product = new Product({
        productName: request.body.productName,
        price: request.body.price,
        category: request.body.category,
        productImageUrl: request.body.productImageUrl
    });
    product.save((error, data)=>{
        response.json(data);
    });
});

router.put("/products", (request, response) => {
    Product.findByIdAndUpdate(request.body.id,request.body,(error, data)=>{
        response.json(data);
    })
});

router.delete("/products", (request, response) => {
    Product.findByIdAndRemove(request.body.id, (error, data)=>{
        response.json(data);
    })
});

module.exports = router;
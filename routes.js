const express = require("express");
const products = require("./products/products");

const router = express.Router();

// This path returns a list of products
router.get("/products", (request, response) => {
    response.json(products);
});

router.post("/products", (request, response) => {
    products.push({
        id: products.length + 1,
        productName: request.body.productName,
        price: request.body.price,
        category: request.body.category,
        productImageUrl: request.body.productImageUrl,
    });

    response.json(products);
});

router.put("/products", (request, response) => {
    const newUpdatedProductList = [];

    products.map((item) => {
        if (item.id === request.body.id) {
            item.productName = request.body.productName;
            item.price = request.body.price;
            item.category = request.body.category;
            item.productImageUrl = request.body.productImageUrl;
        }
        newUpdatedProductList.push(item);
    });
    response.json(newUpdatedProductList);
});

router.delete("/products", (request, response) => {
    response.send("Your product has been deleted!");
});

module.exports = router;
const http = require("http");
const express = require("express");
const router = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/product");

// Database connection
mongoose.connect("mongodb://localhost/ecommerce-db",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Database connected successfully!");
}).catch(()=>{
    console.log("Database connection failed!");
});

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(router);
app.use((request, response, next) => {
    response.send("404 Page does not exist!")
});

const server = http.createServer(app);

server.listen(33000);
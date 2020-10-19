const http = require("http");
const express = require("express");
const router = require("./routes");
const cors = require("cors");

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
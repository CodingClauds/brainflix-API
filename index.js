const express = require("express");
const cors = require("cors"); // Cross Origin Resource Sharing
const app = express();
const fs = require("fs");

app.use(express.static("public"));
require("dotenv").config();
app.use(cors());

const videoRoute = require("./routes/videos");

// SERVER PORT
let PORT;
process.env.STATUS === "production"
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);

// Adding Middleware, next() is important in middleware
app.use(express.json());

app.use((req, res, next) => {
  next();
});

// Routing to videos.js
app.use("/videos", videoRoute);

app.listen(PORT, () => {
  console.log(`Server is Running on Port: ${PORT}`);
});

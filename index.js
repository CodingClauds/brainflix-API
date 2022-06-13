// require("dotenv").config();
const express = require("express");
const app = express(); // This starts express
const cors = require("cors"); // Cross Origin Resource Sharing
const fs = require("fs");

const videoRoute = require("./routes/videos");
app.use(cors());
app.use(express.static("public")); // This allows for static content.

// SERVER PORT
const port = 8080;

// Adding Middleware, next() is important in middleware
app.use(express.json());

app.use((req, res, next) => {
  next();
});

// Routing to videos.js
app.use("/videos", videoRoute);

app.listen(port, () => {
  console.log(`Server is Running on Port: ${port}`);
});

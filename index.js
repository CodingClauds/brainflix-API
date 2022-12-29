// Import packages, Middleware & file system module
const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

app.use(express.static("public"));
require("dotenv").config();
app.use(cors());

const videoRoute = require("./routes/videos");

// SERVER PORT w/ contingency for DEV mode if PROD fails
let PORT;
process.env.STATUS === "production"
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);

app.use(express.json());

app.use((req, res, next) => {
  next();
});

// Routing to videos.js = (http://localhost:8080/videos)
app.use("/videos", videoRoute);

// Connection
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.STATUS} and is currently on Port: ${PORT}`
  );
});

require("dotenv").config();
const express = require("express");
const app = express(); // This starts express
const cors = require("cors"); // Cross Origin Resource Sharing
const videoRoute = require("./routes/videos");
const fs = require("fs");
app.use(cors());

// SERVER PORT
const port = 8080;

// Adding Middleware
app.use(express.json());

// next() is important to have in middleware it would not run without
app.use((req, res, next) => {
  next();
});

app.use("/", videoRoute);

app.listen(port, () => {
  console.log(`Server is Running on Port: ${port}`);
});

require("dotenv").config();
const express = require("express");
const app = express(); // This starts express
const cors = require("cors"); // Cross Origin Resource Sharing
const videoRoute = require("./routes/videos");
app.use(cors());

// SERVER PORT
const PORT = 8080;

// Adding Middleware
app.use(express.json());

app.use("/videos", videoRoute);

//  Middleware template - next is important to have in middleware
// app.use((req, res, next) => {
//   console.log('Response ')
//   next();
// });

app.listen(port, () => {
  console.log(`Server is Running on Port: ${PORT}`);
});

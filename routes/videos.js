// Imports
const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const fs = require("fs"); // Read and Write files
const { v4: uuid } = require("uuid"); // Creates Random ID

// Filepath to .json data, this will have the source of truth and persist data as well!
const videoFilePath = "./data/videos.json";

// Parse Function that will allows us to convert data from String to an object, so we can use in javascript.
const readNewVideos = () => {
  return JSON.parse(fs.readFileSync(videoFilePath));
};

// Stringify Function that allows us to convert data back to a string from an object, so we can now add to our database.
// This takes two arguments, the path and the "data" we decide to write to database. This will go in the (Data here)
const writeNewVideos = () => {
  fs.writeFileSync(videoFilePath, JSON.stringify());
};

// Home
router.get("/", (req, res) => {
  res.send(readNewVideos);
  //   res.send("GET request to /");
});

// // Video Data with Detail Description
// router.get("/:id", (req, res) => {
//   const videoId = req.params.id;
//   res.send(videoId);
// });

// router.post("/", (req, res) => {
//   // res.send(req.body.id);
//   video.push(req.body.id);

//   let video = [
//     {
//       title: "Become A Travel Pro In One Easy Lesson",
//       channel: "Todd Welch",
//       image: "https://i.imgur.com/5qyCZrD.jpg",
//       description:
//         "Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience. This video will focus a lot on helping the first time or inexperienced traveler head out prepared and confident in themselves.",
//       views: "2,043,765",
//       likes: "400,058",
//       duration: "7:26",
//       video: "https://project-2-api.herokuapp.com/stream",
//       timestamp: 1625158995000,
//       comments: [],
//     },
//   ];
//   return res.status(201).send("Added Content");
// });

module.exports = router;

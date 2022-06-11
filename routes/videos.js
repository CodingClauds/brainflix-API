// Imports
const { response } = require("express");
const express = require("express");
const router = express.Router();
const fs = require("fs"); // Read and Write files
const { v4: uuid } = require("uuid"); // Creates Random ID

// Filepath to .json data, this will have the source of truth and persist data as well!
const videoFilePath = "./data/videos.json";

// Parse Function that will allows us to convert data from String to an object, so we can use in javascript.
// const getVideos = () => {
//   return JSON.parse(fs.readFileSync(videoFilePath));
// };

const readVideoDetails = JSON.parse(fs.readFileSync(videoFilePath));

// Stringify Function that allows us to convert data back to a string from an object, so we can now add to our database.
// This takes two arguments, the path and the "data" we decide to write to database. This will go in the (Data here)
// const writeNewVideo = () => {
//   fs.writeFileSync(videoFilePath, JSON.stringify());
// };

// Get all Videos
router.route("/videos").get((req, res) => {
  res.send(readVideoDetails);
});

// Getting one Video with :id
router.route("/videos/:id").get((req, res) => {
  const selectVideoId = req.params.id;

  const foundVideo = readVideoDetails.find(
    (video) => video.id === selectVideoId
  );

  res.send(foundVideo);
});

// // Creating one Video and persisting it to database
// router.route("/").post((req, res) => {
//   res.send("req.body.id");
//   video.push(req.body.id);

//   const postVideo = newVideo({
//     image: req.body.image,
//     title: req.body.title,
//     videoDescription: req.body.description,
//   });

//   // Success status when new video is posted
//   res.status(201).json(newVideo);

//   let video = [
//     {
//       id: `${uuid}`, //See if this syntax is correct!
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
//   console.log(writeNewVideo);
//   // return res.status(201).send("Added Content");
// });

module.exports = router;

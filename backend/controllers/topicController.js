const asyncHandler = require("express-async-handler");

const Topic = require("../models/postModel");

// NOTE: no need to get the user, we already have them on req object from
// protect middleware. The protect middleware already checks for valid user.

// @desc    Get user topics
// @route   GET /api/topics
// @access  Private

const getAllNews = asyncHandler(async (req, res) => {
  console.log("all topics");
  const topics = await Topic.find();
  const baitFishing = topics
    .filter((t) => t.catogory === "Bait Fishing")
    .sort((a, b) => b.createdAt - a.createdAt);
  const maxFish = topics.sort((a, b) => b.fishSize - a.fishSize);
  // const baitFishing = await Topic.find({ catogory: "Bait Fishing" })
  //   .sort({ createdAt: -1 })
  //   .limit(1);
  // const maxFish = await Topic.find().sort({ fishSize: -1 }).limit(1);
  const allFishNews = { baitFishing, maxFish };
  console.log("getAllTopics");
  res.status(200).json(allFishNews);
});

// const getBaitFishingTopics = asyncHandler(async (req, res) => {
//   console.log("all topics");
//   const topics = await Topic.find({ catogory: "Bait Fishing" })
//     .sort({ createdAt: -1 })
//     .limit(1);
//   console.log("getBaitFishingTopics");
//   res.status(200).json(topics);
// });

// const getMaxFishTopic = asyncHandler(async (req, res) => {
//   console.log("hugrfg");
//   const topics = await Topic.find().sort({ fishSize: -1 }).limit(1);
//   console.log("getTopics");
//   res.status(200).json(topics);
// });

// const getAllTopics = asyncHandler(async (req, res) => {
//   console.log("all topics");
//   const topics = await Topic.find();
//   console.log("getAllTopics");
//   res.status(200).json(topics);
// });

const getTopics = asyncHandler(async (req, res) => {
  console.log("hugrfg");
  const topics = await Topic.find({ user: req.user.id });
  console.log("getTopics");
  res.status(200).json(topics);
});

// @desc    Get user topic
// @route   GET /api/topics/:id
// @access  Private

const matchTopic = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id);

  if (!topic) {
    res.status(404);
    throw new Error("Topic not found");
  }

  res.status(200).json(topic);
});


const getTopic = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id);

  if (!topic) {
    res.status(404);
    throw new Error("Topic not found");
  }

  if (topic.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  res.status(200).json(topic);
});

// @desc    Create new topic
// @route   POST /api/topics
// @access  Private
const createTopic = asyncHandler(async (req, res) => {
  const {
    catogory,
    description,
    fishImageName,
    fishImage,
    fishSize,
    fishingGear,
    location,
  } = req.body;
  const split = fishImage.split(","); // or whatever is appropriate here. this will work for the example given
  const base64string = split[1];
  const buffer = Buffer.from(base64string, "base64");

  if (!catogory || !description) {
    res.status(400);
    throw new Error("Please add a catogory and description");
  }
  console.log(req.file);

  // Create a new topic data
  const topic = await Topic.create({
    catogory,
    fishingGear,
    location,
    description,
    user: req.user.id,
    status: "new",
    fishSize,
    fishImageName,
    fishImage,
  });

  res.status(201).json(topic);
});

// @desc    Delete topic
// @route   DELETE /api/topics/:id
// @access  Private
const deleteTopic = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id);

  if (!topic) {
    res.status(404);
    throw new Error("Topic not found");
  }

  if (topic.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  await topic.remove();

  res.status(200).json({ success: true });
});

// @desc    Update topic
// @route   PUT /api/topics/:id
// @access  Private
const updateTopic = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id);

  if (!topic) {
    res.status(404);
    throw new Error("Topic not found");
  }

  if (topic.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not Authorized");
  }

  const updatedTopic = await Topic.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTopic);
});

module.exports = {
  getAllNews,
  matchTopic,
  // getBaitFishingTopics,
  // getMaxFishTopic,
  // getAllTopics,
  getTopics,
  getTopic,
  createTopic,
  deleteTopic,
  updateTopic,
};

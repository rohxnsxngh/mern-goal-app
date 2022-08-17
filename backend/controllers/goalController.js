const asyncHandler = require("express-async-handler");
// Get
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

//Post
const createGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "Create Goals" });
});

//Put
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
});

//Delete
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goals ${req.params.id}` });
});

module.exports = {
  getGoals,
  createGoals,
  updateGoals,
  deleteGoals,
};

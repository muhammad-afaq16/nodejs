const { createCustomError } = require("../error/custom-error");
const asyncWrapper = require("../middleware/async");
const Task = require("../models/Task");

const getAllTasks = asyncWrapper(async function (req, res) {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async function (req, res) {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async function (req, res) {
  const { id: taskID } = req.params;

  const foundTask = await Task.findOne({ _id: taskID });

  if (!foundTask) {
    return next(createCustomError(`No such task ID : ${taskID} found!`, 404));
  }

  res.status(200).json({ task: foundTask });
});

const updateTask = asyncWrapper(async function (req, res) {
  const { id: taskID } = req.params;

  if (!taskID) {
    return next(createCustomError(`No such ID : ${taskID} found!`, 404));
  }

  const taskById = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!taskById) {
    return next(createCustomError(`No such task ID : ${taskID} found!`, 404));
  }

  res.status(200).json({ task: taskById });
});

const deleteTask = asyncWrapper(async function (req, res) {
  const { id: taskID } = req.params;

  if (!taskID) {
    return next(createCustomError(`No such ID : ${taskID} found!`, 404));
  }

  let task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return next(createCustomError(`No such task ID : ${taskID} found!`, 404));
  }

  res.status(200).json({ msg: "Task deleted successfully" });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

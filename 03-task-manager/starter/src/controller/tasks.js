const Task = require("../models/Task");


const getAllTasks = function (req, res) {
  res.end("Get all tasks");
};

const createTask = async function (req, res) {
  const task = await Task.create(req.body);

  res.status(201).json({ task });
  
};

const getTask = function (req, res) {
  res.end("Get a specific task"); 
};

const updateTask = function (req, res) {
  res.end("Update a specific task");
};

const deleteTask = function (req, res) {
  res.end("Delete a specific task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

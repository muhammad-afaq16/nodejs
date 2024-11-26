const express = require("express");
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).post(updateTask).delete(deleteTask);

// res.end() is high level method that automatically sets the headers end calls res.end() for you.

module.exports = router;

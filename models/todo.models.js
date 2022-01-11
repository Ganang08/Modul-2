const mongoose = require("mongoose");

const TodoListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("todo", TodoListSchema);

module.exports = Todo;


const express = require("express");

const router = express.Router();

const {
  listAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller.js");

router.get("/", listAllTodo);

router.post("/", createTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;

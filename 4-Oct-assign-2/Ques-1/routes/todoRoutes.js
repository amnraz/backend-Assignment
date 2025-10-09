const express = require("express");
const {
  getTodos,
  addTodo,
  searchTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.get("/", getTodos);         // GET /todos
router.post("/", addTodo);         // POST /todos
router.get("/search", searchTodos);// GET /todos/search?q=
router.put("/:id", updateTodo);    // PUT /todos/:id
router.delete("/:id", deleteTodo); // DELETE /todos/:id

module.exports = router;
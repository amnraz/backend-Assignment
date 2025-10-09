const { readDB, writeDB } = require("../models/todoModel");

// ✅ Get all todos
function getTodos(req, res) {
  const db = readDB();
  res.json(db.todos);
}

// ✅ Add a new todo
function addTodo(req, res) {
  const { title, completed } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const db = readDB();
  const newTodo = {
    id: db.todos.length ? db.todos[db.todos.length - 1].id + 1 : 1,
    title,
    completed: completed || false,
  };

  db.todos.push(newTodo);
  writeDB(db);

  res.status(201).json(newTodo);
}

// ✅ Get todos by search query
function searchTodos(req, res) {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: "Search query required" });

  const db = readDB();
  const results = db.todos.filter(todo =>
    todo.title.toLowerCase().includes(q.toLowerCase())
  );

  if (results.length === 0) {
    return res.json({ message: "No todos found" });
  }

  res.json(results);
}

// ✅ Update todo by ID
function updateTodo(req, res) {
  const { id } = req.params;
  const { title, completed } = req.body;

  const db = readDB();
  const todo = db.todos.find(t => t.id === parseInt(id));

  if (!todo) return res.status(404).json({ error: "Todo not found" });

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  writeDB(db);
  res.json(todo);
}

// ✅ Delete todo by ID
function deleteTodo(req, res) {
  const { id } = req.params;
  const db = readDB();

  const newTodos = db.todos.filter(t => t.id !== parseInt(id));
  if (newTodos.length === db.todos.length) {
    return res.status(404).json({ error: "Todo not found" });
  }

  db.todos = newTodos;
  writeDB(db);
  res.json({ message: "Todo deleted" });
}

module.exports = {
  getTodos,
  addTodo,
  searchTodos,
  updateTodo,
  deleteTodo,
};
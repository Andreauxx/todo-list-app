import express from "express";
const todosRouter = express.Router();


// GET all todos
todosRouter.get("/todos", (req, res) => {
  res.send("All Todos");
});

// GET a specific todo by id
todosRouter.get("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  res.send(`Getting TODO with id ${todoId}`);
});

// POST to create a new todo
todosRouter.post("/todos", (req, res) => {
  const   newTodo = {
    id: 1,
    title: "Todo",
    description: "My todo",
  };
  res.json(newTodo);
});

// PUT to update a todo by id
todosRouter.put("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  res.send(`Updating TODO with id ${todoId}`);
});

// DELETE a specific todo by id
todosRouter.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  res.send(`Deleting TODO with id ${todoId}`);
});

export default todosRouter;

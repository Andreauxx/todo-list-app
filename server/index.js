import express from "express";
import todosRouter from "./routes/todos.js";  // Correct path to todos.js
import testRouter from "./routes/test.js";    // Correct path to test.js

const app = express();
const port = 4000;

app.use("/api", todosRouter);
app.use("/api", testRouter);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

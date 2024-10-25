import express from "express";
import todosRouter from "./routes/todos.js";  // Correct path to todos.js
import testRouter from "./routes/test.js";    // Correct path to test.js
import connect from "./database/mongodb-connect.js"; // Correct path to mongodb-connect.js
import usersRouter from "./routes/users.js"; // Correct path to users.js


const app = express();
const port = 4000;

// Use body-parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
// use the static middleware to serve static files
app.use(express.static("public"));


app.use("/api", usersRouter); // Correct path to usersRouter
app.use("api",todosRouter); // Correct path to todosRouter


//attempted to connect to the database
connect(); // Correct function name


app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});


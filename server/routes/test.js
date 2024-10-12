import express from "express";

const testRouter = express.Router();


testRouter.get("/test1", (req, res) => {
  res.send("Hello World 1");
});

testRouter.get("/test2", (req, res) => {
  res.send("Hello World 2");
});

testRouter.get("/test3", (req, res) => {
  res.send("Hello World 3");
});

testRouter.get("/test4", (req, res) => {
  res.send("Hello World 4");
});

export default testRouter; 
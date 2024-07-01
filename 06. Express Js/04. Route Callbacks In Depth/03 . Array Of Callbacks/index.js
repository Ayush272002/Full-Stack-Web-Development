import express from "express";
const app = express();

const cb1 = (req, res, next) => {
  console.log("First call back");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second call back");
  next();
};

const cb3 = (req, res) => {
  console.log("Third call back");
  res.send("Array of Callbacks");
};

app.get("/array-cb", [cb1, cb2, cb3]);

app.listen(8000, () => "Server Up!");

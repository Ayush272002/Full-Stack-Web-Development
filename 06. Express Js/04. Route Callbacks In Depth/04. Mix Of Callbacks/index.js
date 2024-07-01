import express from "express";
const app = express();

const cb1 = (req, res, next) => {
  console.log("First Callback");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second Callback");
  next();
};

app.get(
  "/mix",
  [cb1, cb2],
  (req, res, next) => {
    console.log("Third Callback");
    next();
  },
  (req, res, next) => {
    console.log("Fourth Callback");
    res.send("Mix Callbacks");
  }
);

app.listen(8000, () => "Server Up!");

import express from "express";
const app = express();

// ----------------------------
// More Then One Callback
//  - You cannot post response two times ❌
//  - Don't forget to pass the "next" function ⚠️
//  - (next) function will allows us to run another cb. 🏃‍♂️
//  - here in the first callback you can put your (logic) 🗯️

app.get(
  "/cb2",
  (req, res, next) => {
    console.log("First Callback");
    // res.send("Hello"); <- not possible as we can send only 1 res
    next();
  },
  (req, res) => {
    res.send("Second Callback");
  }
);

// ----------------------------

app.listen(8000, () => console.log("Server Up!"));

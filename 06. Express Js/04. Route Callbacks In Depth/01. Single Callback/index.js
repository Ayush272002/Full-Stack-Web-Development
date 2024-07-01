import express from "express";
const app = express();

// Route callback can be in the form of
//  - Single Callback Function
//  - More then one callback
//  - Array Of Function
//  - Combination Of Both

// ----------------------------
// One Callback Function 🛫
app.get("/single-cb", (req, res) => {
  res.send("Single Callback Function");
});
// ----------------------------

app.listen(8000, () => console.log("Server Up!"));

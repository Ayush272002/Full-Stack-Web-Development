import express from "express";
const app = express();

// In path area you can either pass simple Strings or Regular Expressions

// --------------------------------------
//string pattern path
app.get("/ab?cd", (req, res) => {
  res.send("If the user hit (acd) or (abcd) then this will run.");
});

// --------------------------------------

// --------------------------------------
// Regular Expression (Regex) Path
app.get(/x/, (req, res) => {
  res.send("If the path includes the letter (x) itll work.");
});

// Matches requests to /users/ followed by any 4-digit number
// /users/1234
app.get(/^\/users\/[0-9]{4}$/, function (req, res) {
  res.send("Working");
});
// --------------------------------------
//nested routes
app.get("/products/samsung", (req, res) => {
  res.send("This code will only run if you provide /products/samsung");
});

app.listen(8000, () => console.log("Server Up"));

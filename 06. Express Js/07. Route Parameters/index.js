import express from "express";
const app = express();

// Route parameters are named URL segments that are used to capture the
//values specified at their position in the URL.The captured values are
//populated in the(req.params) object, with the name of the route
//parameter specified in the path as their respective keys.

// Getting Route Params 👇
// app.get("/student/delete/:id", (req, res) => {
//   //the id is stored in req.prams
//   res.send(`User deleted ${req.params.id}`);
// });

// // Destructuring Route Params
// app.get("/ecom/products/iphone/:model", (req, res) => {
//   const { model } = req.params;
//   res.send(model);
// });

// // Passing Multiple Route Params
// app.get("/products/:category/:id", (req, res) => {
//   const { category, id } = req.params;
//   res.send(`Product Category: (${category}), Product Id: (${id})`);
// });

// -----------------------
// The app.params() function is used to add the callback triggers to route parameters.
// It is commonly used to check for the existence of the data requested related to the route param.
// app.param(name, callback)

app.param("id", (req, res, next, id) => {
  console.log(`id : ${id}`)
  next()
})

app.get("/user/:id", (req, res) => {
  console.log("This is User ID Path")
  res.send("Response OK")
})

app.listen(8000, () => console.log("Server Up!"));

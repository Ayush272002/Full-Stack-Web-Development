import express from "express";
import userCredentials from "./middlewares/logs.js";
const app = express();

//middleware is a function that take 3 parameters
//(req, res, next)
//middleware that has access to req, res of the http req
//it can perform operation on the incoming req,
//it allows us to modify our response object or even pass control to the next middleware function
console.clear();

// function userCredentials(req, res, next) {
//   console.log("Username : (Ayush)");
//   console.log("Email  : abx@xyz.com");
//   console.log("Password : (1234)");
//   console.log("Age : (19)");
//   next();
// }

// put the above middleware into logs.js

/* 
How it gets called ? 
first req to the server 
then middleware gets invoked if its true then 
req and res gets processed
*/

// app.get("/", userCredentials, (req, res) => {
//   res.send("<h1>Hello Admin</h1>");
// });

//the above is not an appropriate way

app.use(userCredentials); //by this way we dont need to specify it everytime
app.get("/", (req, res) => {
  res.send("<h1>Hello Admin</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About section</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact section</h1>");
});

app.listen(8000, () => console.log("Server Up!"));

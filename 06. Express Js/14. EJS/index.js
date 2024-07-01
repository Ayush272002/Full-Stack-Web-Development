import express from "express";
import route from "./routes/route.js";
import bodyParser from "body-parser";
const app = express();

app.set("view engine", "ejs"); //we are using ejs

app.use("/", route);
app.use(bodyParser.json()); //to parse the icoming data from post

app.post("/", (req, res) => {
  const { name, email, age } = req.body;
  res.send(`${name}, ${email}, ${age}`);
});

app.listen(8000, () => console.log("Server Up!"));

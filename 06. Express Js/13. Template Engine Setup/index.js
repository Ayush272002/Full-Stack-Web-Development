import express from "express";
import { join } from "path";
import route from "./routes/route.js";
const app = express();

app.set("view engine", "ejs"); //we are using ejs

app.use("/", route);

app.listen(8000, () => console.log("Server Up!"));

import express from "express";
import { updateByID, updateOne, updateMany } from "./models/Movies.js";
import connectDB from "./db/connectDB.js";
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(DATABASE_URL);

updateByID();

app.listen(port, () => console.log(`Server listning on port ${port}`));

import express from "express";
import {
  allDocs,
  singleDoc,
  getDocById,
  docWithField,
  getLimitedDoc,
  skipDoc,
  countDoc,
  sortDoc,
  operato,
} from "./models/Movies.js";
import connectDB from "./db/connectDB.js";
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(DATABASE_URL);

// allDocs();
// getSingleDoc();
// getDocById();
// docWithField();
// getLimitedDoc();
// skipDoc();
// countDoc();
// sortDoc();
// operato();

app.listen(port, () => console.log(`Server listning on port ${port}`));

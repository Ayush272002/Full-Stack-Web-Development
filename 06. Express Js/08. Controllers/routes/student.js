import express from "express";
import {
  allStudents,
  createStudents,
  putStudent,
  deleteStudent,
} from "../controllers/student.js";
const router = express.Router();

router.get("/all", allStudents);
router.get("/create", createStudents);
router.get("/put", putStudent);
router.get("/delete", deleteStudent);

export default router;

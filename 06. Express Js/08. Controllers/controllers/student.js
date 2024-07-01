import express from "express";

const allStudents = (Req, res) => res.send("All Students");
const createStudents = (Req, res) => res.send("Create Students");
const putStudent = (Req, res) => res.send("Put Students");
const deleteStudent = (Req, res) => res.send("Delete Students");

export { allStudents, createStudents, putStudent, deleteStudent };

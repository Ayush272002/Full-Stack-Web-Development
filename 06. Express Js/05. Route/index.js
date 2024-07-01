import express from "express";
const app = express();

// app.get("/student", (req, res) => {
//   res.send("All Students");
// });

// app.post("/student", (req, res) => {
//   res.send("Add new Students");
// });

// app.put("/student", (req, res) => {
//   res.send("Update Student");
// });

// app.delete("/student", (req, res) => {
//   res.send("Delete Student");
// });

//using app.route() method
app
  .route("/student")
  .get((req, res) => res.send("All Students"))
  .post((req, res) => res.send("Add new Students"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Delete Student"));

app.listen(8000, () => console.log("Server Up!"));

import express from "express";
import path from "path";
const app = express();

//built in middleware allows to serve static files
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./public/index.html"));
});

app.listen(8000, () => console.log("Server Up!"));

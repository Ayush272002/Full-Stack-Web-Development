// 1. npm init -y
// 2. Install express (npm install express --save)
// 3. Get Express Into Your Project (require("express")) or import express
// 4. Create instance of Express (const app = express())
// 5. Provide port (app.listen(5000, () => console.log("port 5000")))
// 6. basic rout (app.get(path, callback))

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express.js");
});

app.listen(8000, () => console.log("Server Up"));

import express from "express";
const app = express();

// Routing refers to how an application’s endpoints (URIs) respond to client requests.

// HTTP Methods
// GET👉 Retrive Data
// POST 👉 Create/Insert Data
// PUT 👉 Completely Update Data
// PATCH 👉 Partially Update Data
// DELETE 👉 Delete Data
// ALL 👉 Any HTTP Request Method

//basic routing
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Home</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>Welcome to About</h1>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Welcome to Contact Page</h1>")
})

app.listen(8000, () => console.log("Server Up"));

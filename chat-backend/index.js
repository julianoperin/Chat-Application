const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.APP_PORT;

app.get("/", (req, res) => {
  res.send("This is home");
});

app.get("/login", (req, res) => {
  res.send("This is login");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require("express");
require("dotenv").config();
const config = require("./config/app");

const app = express();

const port = config.appPort || 3001;

app.get("/", (req, res) => {
  res.send("This is home");
});

app.get("/login", (req, res) => {
  res.send("This is login");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

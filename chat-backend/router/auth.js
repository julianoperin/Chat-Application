const router = require("express").Router();

router.get("/login", (req, res) => {
  res.send("Login Screen");
});

router.get("/register", (req, res) => {
  res.send("Register screen");
});

module.exports = router;

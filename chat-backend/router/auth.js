const router = require("express").Router();

router.post("/login", (req, res) => {
  res.send(["Login Screen", req.body]);
});

router.post("/register", (req, res) => {
  res.send("Register screen");
});

module.exports = router;

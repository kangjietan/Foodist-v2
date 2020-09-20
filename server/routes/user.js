const express = require("express");

const router = express.Router();

router.post('/signup', (req, res) => {
  console.log(req.body);
  
  res.sendStatus(200);
});

router.get("/list", (req, res) => {
  res.redirect("/");
});

module.exports = router;
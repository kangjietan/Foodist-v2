const express = require("express");

const router = express.Router();

const controller = require("../../database/controllers/index");

const { ensureAuthenticated } = require("../../config/auth");

router.post('/signup', controller.user.register);

router.get("/list", (req, res) => {
  res.redirect("/");
});

module.exports = router;
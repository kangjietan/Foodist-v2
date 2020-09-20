const express = require("express");

const router = express.Router();

const controller = require("../../database/controllers/index");

const { ensureAuthenticated } = require("../../config/auth");

router.post('/register', controller.user.register);

router.post('/login', controller.user.login);

router.get("/list", (req, res) => {
  res.redirect("/");
});

module.exports = router;
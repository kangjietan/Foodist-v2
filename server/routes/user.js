const express = require("express");

const router = express.Router();

const controller = require("../../database/controllers/index");

const { ensureAuthenticated } = require("../../config/auth");

router.post('/register', controller.user.register);

router.post('/login', controller.user.login);

router.get('/logout', controller.user.logout);

router.get("/authenticated", ensureAuthenticated, controller.user.isAuthenticated);

router.post("/favoriteslist/update", ensureAuthenticated, controller.user.updateUserFavoritesList);

router.get("/favoriteslist", ensureAuthenticated, controller.user.getUserFavoritesList);

module.exports = router;

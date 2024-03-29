const User = require("../models/User");

const bcrypt = require("bcryptjs");

const passport = require("passport");

module.exports = {
  user: {
    register: (req, res) => {
      const { username, password, password2 } = req.body;
      let data = { errors: [] };

      let alphanumeric = "[A-Za-z0-9]+";

      // Check required fields
      if (!username || !password || !password2) {
        data.errors.push({ msg: "Please fill in all fields" });
      }

      // Check for alphanumeric chars only
      if (!username.match(alphanumeric)) {
        data.errors.push({
          msg: "Username can contain only numbers and the alphabet",
        });
      }

      // Check passwords match
      if (password !== password2) {
        data.errors.push({ msg: "Passwords do not match" });
      }

      // Check password length
      if (password.length < 6) {
        data.errors.push({
          msg: "Password should be at least 6 characters long",
        });
      }

      if (data.errors.length > 0) {
        res.status(400).json(data);
      } else {
        User.findOne({ username }).then((user) => {
          if (user) {
            data.errors.push({ msg: "Username is already registered" });
            res.json(data);
          } else {
            const newUser = new User({
              username,
              password,
            });

            // Hash password
            bcrypt.genSalt(10, (err, salt) =>
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;

                // Stored hashed password
                newUser.password = hash;
                // Save user
                newUser
                  .save()
                  .then((user) =>
                    res.json({ success: [{ msg: "You have registered" }] })
                  )
                  .catch((err) => {
                    res.sendStatus(503);
                  });
              })
            );
          }
        });
      }
    },
    login: (req, res, next) => {
      let errors = [];
      let success = [];
      passport.authenticate("local", (err, user, info) => {
        if (err) {
          return next(err);
        }

        if (!user) {
          errors.push({
            msg: "Login failed. Username or password is incorrect.",
          });
          return res.status(400).json({ errors });
        }

        req.login(user, (err) => {
          if (err) {
            return next(err);
          }

          success.push({ msg: "Login successful" });
          return res.json({ success });
        });
      })(req, res, next);
    },
    logout: (req, res) => {
      req.logout();
      res.json({ success: { msg: "Signed out" } });
    },
    isAuthenticated: (req, res) => {
      res.json({ success: { msg: "Authenticated" } });
    },
    updateUserFavoritesList: (req, res) => {
      const list = JSON.parse(Object.keys(req.body)[0]);

      User.findOneAndUpdate(
        { username: req.user.username },
        { favoriteslist: list }
      )
        .then((user) => {
          res.sendStatus(200);
        })
        .catch((err) => {

        });
    },
    getUserFavoritesList: (req, res) => {
      User.findOne({ username: req.user.username })
        .then((user) => {
          let list = {};
          user.favoriteslist.forEach((id) => (list[id] = { id }));
          res.json(list);
        })
        .catch((err) => {
          res.sendStatus(503);
        });
    },
  },
};

const User = require("../models/User");

const bcrypt = require("bcryptjs");

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
        res.json(data);
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
                    console.log(err);
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
          console.log(err);
          return next(err);
        }

        if (!user) {
          errors.push({
            msg: "Login failed. Username or password is incorrect.",
          });
          return res.json({ errors });
        }

        req.login(user, (err) => {
          if (err) {
            console.log(err);
            return next(err);
          }

          success.push({ msg: "Login successful" });
          return res.json({ success });
        });
      })(req, res, next);
    },
    logout: (req, res) => {
      req.logout();
      res.json({ msg: "Signed out" });
    },
    isAuthenticated: (req, res) => {
      res.json({ success: { msg: "Authenticated" } });
    },
  },
};

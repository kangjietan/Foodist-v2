const LocalStrategy = require("passport-local").Strategy;

const bcrypt = require("bcryptjs");

const User = require("../database/models/User");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username })
        .then((user) => {
          if (!user) {
            return done(null, false, {
              message: "That username is not registered",
            });
          }

          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Password incorrect " });
            }
          });
        })
        .catch((err) => {
          
        });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
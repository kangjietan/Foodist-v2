const express = require("express");

const passport = require("passport");

const session = require("express-session");

const path = require("path");

const app = express();

const PORT = parseInt(process.env.PORT) || 3000;

// Passport config
require("../config/passport")(passport);

// Express Session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/dist')));

// Routes
app.use('/yelp', require('./routes/yelp'));

app.use('/user', require('./routes/user'));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => console.log('Listening on port: ' + PORT));

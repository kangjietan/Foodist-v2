const express = require("express");

const morgan = require("morgan");

const passport = require("passport");

const session = require("express-session");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("tiny"));

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/dist')));

// Routes

app.use('/yelp', require('./routes/yelp'));

app.use('/user', require('./routes/user'));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => console.log('Listening on port: ' + PORT));

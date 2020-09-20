require("dotenv").config();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongo"))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);

module.exports = mongoose;

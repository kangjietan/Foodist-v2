const express = require("express");

const router = express.Router();

const yelp = require("../../api/yelp");

router.get("/search", (req, res) => {
  const params = req.query;
  params.limit = 50;

  yelp
    .businessSearch(params)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

module.exports = router;

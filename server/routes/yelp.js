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
      res.status(500).json(error);
    });
});

router.get("/business/:id", (req, res) => {
  const { id } = req.params;

  yelp
    .getBusinessDetails(id)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;

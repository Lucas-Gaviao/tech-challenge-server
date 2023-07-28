const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("Hi, THERE");
});

module.exports = router;

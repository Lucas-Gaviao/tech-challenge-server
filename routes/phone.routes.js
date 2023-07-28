const router = require("express").Router();

const Phone = require("../models/Phone.model.js");

router.get("/phones", (req, res, next) => {
  Phone.find()
    .then((listOfPhones) => res.json(listOfPhones))
    .catch((err) => console.log("error to get list of phones", err));
});

router.get("/phones/:id", (req, res, next) => {
  const { id } = req.params;

  Phone.findById(id)
    .then((oneById) => res.json(oneById))
    .catch((err) => {
      console.log("failed to get one phone :(", err);
    });
});

module.exports = router;

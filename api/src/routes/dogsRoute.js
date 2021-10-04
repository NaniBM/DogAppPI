const router = require("express").Router();
const { getDogs } = require("../controllers/dogs");
const { getDogsById } = require("../controllers/dogById");

router.get("/", function (req, res) {
  getDogs(req, res);
});

router.get("/:idRaza", function (req, res) {
  const { idRaza } = req.params;
  getDogsById(idRaza, res);
});

module.exports = router;

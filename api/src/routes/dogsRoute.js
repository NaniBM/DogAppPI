const router = require("express").Router();
const { getDogs, getDogsById } = require("../controllers/dogs");

router.get("/", function (req, res) {
  getDogs(req, res);
});

router.get("/:idRaza", function (req, res) {
  const { idRaza } = req.params;
  getDogsById(idRaza, res);
});

module.exports = router;

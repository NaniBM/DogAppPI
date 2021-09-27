const router = require("express").Router();
const { getTemperaments } = require("../controllers/temperaments");

router.get("/", function (req, res) {
  getTemperaments(res);
});

module.exports = router;

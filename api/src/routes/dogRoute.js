const router = require("express").Router();
const addNewBreed = require("../controllers/dogpost");
router.post("/", function (req, res) {
  addNewBreed(req, res);
});

module.exports = router;

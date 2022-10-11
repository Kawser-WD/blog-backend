const express = require("express");
const router = express.Router();
const { getStats } = require("../controllers/statsController");
router.route("/get_all").get(getStats);

module.exports = router;

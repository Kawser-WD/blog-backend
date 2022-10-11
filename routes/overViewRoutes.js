const express = require("express");
const router = express.Router();

const { Complete, getStats } = require("../controllers/overviewController");

router.route("/complete").post(Complete);
router.route("/get_overview").get(getStats);

module.exports = router;

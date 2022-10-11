const express = require("express");
const router = express.Router();
const {
  CreateCourse,
  getDropdown,
  deleteCourse,
  getAllCourseByCourse,
  getAllcourseByCategory,
} = require("../controllers/courseController");

router.route("/create").post(CreateCourse);
router.route("/dropdown").get(getDropdown);
router.route("/delete/:id").delete(deleteCourse);
router.route("/categorywise/:categoryid").get(getAllcourseByCategory);
router.route("/getbycourse/:couresid").get(getAllCourseByCourse);

module.exports = router;

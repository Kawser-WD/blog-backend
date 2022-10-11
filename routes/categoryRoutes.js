const express = require("express");
const router = express.Router();
const {
  CreateCategory,
  getDropdown,
  getAllCategoryByCategory,
} = require("../controllers/categoryController");

router.route("/create").post(CreateCategory);
router.route("/dropdown").get(getDropdown);
router.route("/getbycategory/:category_id").get(getAllCategoryByCategory);

module.exports = router;

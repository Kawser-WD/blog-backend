const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleWare");
const {
  Login,
  Registration,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUsers,
} = require("../controllers/userController");

router.route("/register").post(Registration);
router.route("/login").post(Login);
router.route("/get_all").get(protect, admin, getAllUser);
router.route("/get_single/:user_id").get(protect, getSingleUser);
router.route("/update_single/:user_id").patch(protect, updateUser);
router.route("/delete_single/:user_id").delete(protect, admin, deleteUsers);

module.exports = router;

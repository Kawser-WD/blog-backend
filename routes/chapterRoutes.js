const express = require("express");
const router = express.Router();
const {
  CreateChapter,
  getAllChapter,
  getAllChapterByCourse,
  getAllChapterByChapter,
  updatechapter,
  deletechapter,
} = require("../controllers/chapterController");

router.route("/").get(getAllChapter);
router.route("/:category_id").get(getAllChapterByCourse);
router.route("/create").post(CreateChapter);
router.route("/getbychapter/:chapter_id").get(getAllChapterByChapter);
router.route("/editbychapter/:chapter_id").patch(updatechapter);
router.route("/delete/:id").delete(deletechapter);
module.exports = router;

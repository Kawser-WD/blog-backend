const asyncHandler = require("express-async-handler");
const Chapter = require("../models/chapterModel");

//create chapter
const CreateChapter = asyncHandler(async (req, res) => {
  const { category_id, course_id, title, content, image } = req.body;

  const chapter = new Chapter({
    category_id,
    course_id,
    title,
    content,
    image,
  });
  try {
    const queryData = await chapter.save();
    res.json({
      message: "successfully created",
      data: queryData,
    });
  } catch (error) {
    response.status(500).json({ message: "Error in invocation of API" });
  }
});
//get all chapter
const getAllChapter = asyncHandler(async (req, res) => {
  try {
    const result = await Chapter.find(
      {},
      { createdAt: 0, updatedAt: 0, __v: 0 }
    );
    // console.log(result);
    res.status(200).json({
      message: "Get all chapter successfully...!",
      data: result,
    });
  } catch (error) {
    res.json({ message: error });
  }
});
//get all chapter by course
const getAllChapterByCourse = asyncHandler(async (req, res) => {
  //   console.log("api hited ....... ");
  const Course_id = req.params.category_id;
  //   console.log(Course_id);
  try {
    const result = await Chapter.find({ course_id: Course_id });
    // console.log("api result", result);
    res.status(201).json({
      message: `get all ${Course_id} chapter successfully`,
      data: result,
    });
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});
//get chapter by chapter id
const getAllChapterByChapter = asyncHandler(async (req, res) => {
  const chapter_id = req.params.chapter_id;
  try {
    const result = await Chapter.findById(chapter_id);
    res.status(200).json({
      message: "Get single data successfully...!",
      data: result,
    });
  } catch (error) {
    res.json({ message: error });
  }
});
const updatechapter = asyncHandler(async (req, res) => {
  const chapter_id = req.params.chapter_id;
  const queresult = await Chapter.findById(chapter_id);
  if (queresult) {
    queresult.category_id = req.body.category_id || queresult.category_id;
    queresult.course_id = req.body.course_id || queresult.course_id;
    queresult.title = req.body.title || queresult.title;
    queresult.content = req.body.content || queresult.content;
    queresult.image = req.body.image || queresult.image;

    try {
      updatequeresult = await queresult.save();
      res.status(201).json({
        message: "updated successfully!",
      });
    } catch (error) {
      return res.status(400).json({ error: error.toString() });
    }
  }
});

const deletechapter = asyncHandler(async (req, res) => {
  const chapter = await Chapter.findById(req.params.id);

  if (chapter) {
    await chapter.remove();
    res.json({ message: "chapter removed" });
  } else {
    res.status(404);
    throw new Error("chapter not found");
  }
});
module.exports = {
  CreateChapter,
  getAllChapter,
  getAllChapterByCourse,
  getAllChapterByChapter,
  updatechapter,
  deletechapter,
};

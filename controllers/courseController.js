const asyncHandler = require("express-async-handler");
const Course = require("../models/courseModel");

//create course
const CreateCourse = asyncHandler(async (req, res) => {
  const { coursename, category_id, course_description, image } = req.body;

  const course = new Course({
    coursename,
    category_id,
    course_description,
    image,
  });
  try {
    const queryData = await course.save();
    res.json({
      message: "successfully created",
      data: queryData,
    });
  } catch (error) {
    response.status(500).json({ message: "Error in invocation of API" });
  }
});
const getDropdown = asyncHandler(async (req, res) => {
  try {
    const result = await Course.find(
      {},
      { createdAt: 0, updatedAt: 0, __v: 0 }
    );
    // console.log(result);
    res.status(200).json({
      message: "Get dropwdown data successfully...!",
      data: result,
    });
  } catch (error) {
    res.json({ message: error });
  }
});

const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (course) {
    await course.remove();
    res.json({ message: "course removed" });
  } else {
    res.status(404);
    throw new Error("course not found");
  }
});
const getAllCourseByCourse = asyncHandler(async (req, res) => {
  const couresid = req.params.couresid;
  try {
    const result = await Course.findById(couresid);
    res.status(200).json({
      message: "Get single data successfully...!",
      data: result,
    });
  } catch (error) {
    res.json({ message: error });
  }
});
const getAllcourseByCategory = asyncHandler(async (req, res) => {
  const category_id = req.params.categoryid;
  try {
    const result = await Course.find({ category_id: category_id });
    res.status(200).json({
      message: "Get single data successfully...!",
      data: result,
    });
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = {
  CreateCourse,
  getDropdown,
  deleteCourse,
  getAllCourseByCourse,
  getAllcourseByCategory,
};

const mongoose = require("mongoose");
const courseSchema = mongoose.Schema(
  {
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Cetegory",
    },
    coursename: {
      type: String,
      required: true,
    },
    course_description: {
      type: String,
      required: true,
    },
    course_description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;

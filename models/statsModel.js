const mongoose = require("mongoose");
const statSchema = mongoose.Schema(
  {
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Course",
    },
    total: {
      type: Number,
      required: false,
      default: 0,
    },
    complete: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Stats = mongoose.model("Stats", statSchema);

module.exports = Stats;

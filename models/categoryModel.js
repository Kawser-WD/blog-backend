const mongoose = require("mongoose");
const categorySchema = mongoose.Schema(
  {
    categoryname: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const category = mongoose.model("Cetegory", categorySchema);

module.exports = category;

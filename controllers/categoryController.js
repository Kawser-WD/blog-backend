const asyncHandler = require("express-async-handler");
const Category = require("../models/categoryModel");

//create category
const CreateCategory = asyncHandler(async (req, res) => {
  const { categoryname } = req.body;

  const category = new Category({
    categoryname,
  });
  try {
    const queryData = await category.save();
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
    const result = await Category.find(
      {},
      { createdAt: 0, updatedAt: 0, __v: 0 }
    );
    console.log(result);
    res.status(200).json({
      message: "Get dropwdown data successfully...!",
      data: result,
    });
  } catch (error) {
    res.json({ message: error });
  }
});
//get category by category id
const getAllCategoryByCategory = asyncHandler(async (req, res) => {
  const category_id = req.params.category_id;
  try {
    const result = await Category.findById(category_id);
    res.status(200).json({
      message: "Get single data successfully...!",
      data: result,
    });
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = {
  CreateCategory,
  getDropdown,
  getAllCategoryByCategory,
};

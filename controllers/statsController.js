const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

//Login for Users
const getStats = asyncHandler(async (req, res) => {
  console.log("api called.......");
  try {
    res.json({
      message: "successfully get data",
      data: "true",
    });
  } catch (error) {
    console.log(error);
  }
  //   const { email, password } = req.body;
  //   const user = await User.findOne({ email });
  //   if (user && (await user.matchPassword(password))) {
  //     res.json({
  //       message: "login success",
  //       _id: user._id,
  //       email: user.email,
  //       isAdmin: user.isAdmin,
  //       token: generateToken(user._id),
  //     });
  //   } else {
  //     res.status(202).send(new Error("invalid user name or password"));
  //   }
});
module.exports = {
  getStats,
};

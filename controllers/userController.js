const e = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

//Login for Users
const Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      message: "login success",
      _id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(202).send(new Error("invalid user name or password"));
  }
});

////Registration  for Users
const Registration = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const userExists = await User.findOne({ email });

  console.log("user exist", userExists);

  if (userExists) {
    res.status(202).send({
      message: "user already exist",
    });
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    isAdmin: req.body.isAdmin,
  });

  try {
    const createUser = await user.save();
    res.json({
      message: "successfully registration",
      data: createUser,
    });
  } catch (error) {
    console.log(error);
  }
});
const getAllUser = asyncHandler(async (req, res) => {
  try {
    const result = await User.find({}, { createdAt: 0, updatedAt: 0, __v: 0 });
    // console.log(result);
    res.status(200).json({
      message: "Get All User successfully...!",
      data: result,
    });
  } catch (error) {
    res.json({ message: error });
  }
});
const getSingleUser = asyncHandler(async (req, res) => {
  const userId = req.params.user_id;
  try {
    const result = await User.findById(userId);
    if (result) {
      res.status(200).json({
        message: "Get single user successfully...!",
        data: result,
      });
    } else {
      res.status(200).json({
        message: "user not found!",
        data: result,
      });
    }
  } catch (error) {
    res.json({ message: error });
  }
});
const updateUser = asyncHandler(async (req, res) => {
  const user_id = req.params.user_id;
  const queresult = await User.findById(user_id);
  if (queresult) {
    queresult.isAdmin = req.body.isAdmin || queresult.isAdmin;
    queresult.name = req.body.name || queresult.name;
    queresult.email = req.body.email || queresult.email;
    queresult.password = req.body.password || queresult.password;

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
const deleteUsers = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.user_id);

  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
module.exports = {
  Login,
  Registration,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUsers,
};

const asyncHandler = require("express-async-handler");
const Stats = require("../models/statsModel");

//Login for Users
const Complete = asyncHandler(async (req, res) => {
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
const getStats = asyncHandler(async (req, res) => {
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

module.exports = {
  Complete,
  getStats,
};

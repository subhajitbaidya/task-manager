const User = require("../models/user.js");
const jwtService = require("../services/auth.js");

async function handleSignUp(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields mandatory" });

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    return res.status(400).json({
      error: "User already registered",
    });
  }

  try {
    const user = await User.create({
      username: name,
      email: email,
      password: password,
    });

    res.status(201).json({
      message: `${user} created!`,
      time: Date.now(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failure!" });
  }
}

async function LoginUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields mandatory!");
  }

  const user = await User.findOne({ email, password });
  if (!user) {
    res.status(400);
    throw new Error("User not found!");
  }

  const authToken = jwtService.setUser(user);
  res.status(200).json({
    message: `User is Logged in as ${user}`,
    token: authToken,
  });

  return user;
}

async function showUsers(req, res) {
  const users = await User.find({});
  res.status(200).json(users);
}

module.exports = {
  handleSignUp,
  showUsers,
  LoginUser,
};

const User = require("../models/user.js");

async function handleSignUp(req, res) {
  const { name, mail, password } = req.body;

  if (!name || !mail || !password)
    return res.status(400).json({ error: "All fields mandatory" });

  const user = await User.create({
    username: name,
    email: mail,
    password: password,
  });

  res.status(201).json({
    message: `${user} created!`,
    time: Date.now(),
  });
}

async function LoginUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields mandatory!");
  }

  const user = await User.findOne({ username, password });
  res.status(200).json({
    message: `User is Logged in as ${user}`,
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
  LoginUser
};

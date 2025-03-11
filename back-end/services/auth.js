const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET_KEY;

const setUser = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  );
};

const getUser = (token) => {
  try {
    const user = jwt.verify(token, secret);
    return user;
  } catch (error) {
    return null;
  }
};

module.exports = {
  setUser,
  getUser,
};

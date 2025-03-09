const express = require("express");
const router = express.Router();
const { handleSignUp, showUsers, LoginUser } = require("../controllers/user");

router.route("/").get(showUsers).post("/", handleSignUp);
router.post("login", LoginUser);

module.exports = router;

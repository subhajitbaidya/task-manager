const express = require("express");
const router = express.Router();
const { handleSignUp, showUsers, LoginUser } = require("../controllers/user");
const validateToken = require("../middlewares/checkauth");

router.route("/").get(validateToken, showUsers).post(handleSignUp);
router.post("/login", LoginUser);

module.exports = router;

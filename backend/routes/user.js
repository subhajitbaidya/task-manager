const express = require("express");
const router = express.Router();
const { handleSignUp, showUsers, LoginUser } = require("../controllers/user");
const validateToken = require("../middlewares/checkauth.js");

router.get("/api/users", validateToken, showUsers);
router.post("/signup", handleSignUp);
router.post("/login", LoginUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const { handleSignUp, showUsers } = require("../controllers/user");

router.get("/", showUsers);
router.post("/", handleSignUp);

module.exports = router;

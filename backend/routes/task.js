const express = require("express");
const { handlePromptStorage } = require("../controllers/task");
const promptRouter = express.Router();

promptRouter.post("/main", handlePromptStorage);
module.exports = promptRouter;

const promptModel = require("../models/task.js");

async function handlePromptStorage(req, res) {
  const prompt = JSON.stringify(req.body);
  if (!prompt) return null;

  try {
    const savedPrompt = await promptModel.create({
      user_prompt: prompt,
    });
    return res.status(201).json({
      message: "Prompt stored successfully",
      data: savedPrompt,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Unable to create prompt",
      error: error.message,
    });
  }
}

module.exports = {
  handlePromptStorage,
};

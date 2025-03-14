const mongoose = require("mongoose");

const userTask = mongoose.Schema(
  {
    user_prompt: {
      type: String,
    },
  },
  { timestamps: true }
);

const promptModel = mongoose.model("prompts", userTask);
module.exports = promptModel;

const express = require("express");
const app = express();
const { connectMongoDB } = require("./config/dbconnect.js");
const userRoute = require("./routes/user.js");
const promptRouter = require("./routes/task.js");
// Parse jSON data
app.use(express.json());
// Parse form data
app.use(express.urlencoded({ extended: false }));
app.use("/", userRoute);
app.use("/app", promptRouter);

// MongoDB Connection
connectMongoDB();

module.exports = app;

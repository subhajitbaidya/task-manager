const express = require("express");
const app = express();
const { connectMongoDB } = require("./config/dbconnect.js");
const route = require("./routes/user.js");
// Parse jSON data
app.use(express.json());
app.use("/", route);

// MongoDB Connection
connectMongoDB();

module.exports = app;

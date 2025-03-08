const express = require("express");
const app = express();
const { connectMongoDB } = require("./config/dbconnect.js");

connectMongoDB();

module.exports = app;

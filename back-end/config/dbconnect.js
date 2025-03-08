const mongoose = require("mongoose");
require("dotenv").config();

async function connectMongoDB(
  connection_string = process.env.CONNECTION_STRING
) {
  try {
    const connect = await mongoose.connect(connection_string);
    console.log(
      "database connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = {
  connectMongoDB,
};

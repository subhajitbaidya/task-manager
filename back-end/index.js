const app = require("./app.js");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.listen(() => {
  console.log(`Server running on PORT ${PORT}`);
});

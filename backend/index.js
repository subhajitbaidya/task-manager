const app = require("./app.js");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

// Starting express instance
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

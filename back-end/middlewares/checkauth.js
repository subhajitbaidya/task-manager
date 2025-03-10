const jwt = require("../services/auth");
async function validateToken(req, res, next) {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (!authHeader) {
    return res.status(400).json({ error: "missing auth token" });
  }
  if (authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(400).json({ error: "missing auth token" });
    }
    try {
      const user = jwt.getUser(token);
      req.user = user;
      return next();
    } catch (error) {
      return res.status(400).json({ error: "expired token" });
    }
  }
}

module.exports = validateToken;

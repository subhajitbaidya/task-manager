const { getUser } = require("../services/auth");
async function validateToken(req, res, next) {
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (!authHeader) {
    return res.status(400).json({ error: "missing auth token" });
  }
  if (authHeader.startsWith("Bearer")) {
    const token = authHeader.split(" ")[1];
    try {
      const user = getUser(token);
      if (!user) {
        return res.status(401).json({ error: "Invalid or expired token" });
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(400);
      throw new Error("validation failed");
    }
  }
}

module.exports = validateToken;

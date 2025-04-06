const jwt = require("jsonwebtoken");
const user = require("../models/User");

// Middleware to protect routes
const protect = async (req, resizeBy, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await user.findById(decoded.user.id).select("-password"); // Exclude password from the user object
      next();
    } catch (error) {
      console.error("Token verification failed:", error);
      resizeBy.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    resizeBy.status(401).json({ message: "Not authorized, no token provided" });
  }
};

module.exports = { protect };

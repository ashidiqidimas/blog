require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return  res.status(401).send("Not authorized");

  const token = authHeader.split(" ")[1];

  try {
    const userId = await jwt.verify(token, process.env.JWT_SECRET_PASSWORD);
    req.auth = userId;
    next();
  } catch (e) {
    return res.json(e);
  }
}

module.exports = verifyToken;
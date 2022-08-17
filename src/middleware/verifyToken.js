require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    const err = new Error("Not authorized");
    err.code = 401;
    return res.status(401).send(err);
  }
  const token = authHeader.split(" ")[1];
  try {
    const userId = await jwt.verify(token, process.env.JWT_SECRET_PASSWORD);
    req.auth = userId;
    next();
  } catch (e) {
    e.code = 401
    return res.status(401).json(e);
  }
};

module.exports = verifyToken;
const { body } = require("express-validator");

const authValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
];

module.exports = {
  authValidation,
};
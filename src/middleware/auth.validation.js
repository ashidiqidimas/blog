const { body } = require("express-validator");

const authValidation = [
  body('email').isEmail(),
  body('password').isURL(),
];

module.exports = {
  authValidation,
};
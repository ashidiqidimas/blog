const { body } = require("express-validator");

const registrationValidation = [
  body('fullname').isString().isLength({ min: 2, max: 150 }),
  body('email').isEmail(),
  body('password').isLength({min: 8}),
];

module.exports = {
  registrationValidation,
};
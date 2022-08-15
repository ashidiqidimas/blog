const { body } = require("express-validator");

const postValidation = [
  body('title').isString().isLength({ min: 2, max: 150 }),
  body('image').isURL(),
  body('body').isString(),
];

module.exports = {
  postValidation,
};
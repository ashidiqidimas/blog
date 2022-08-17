const { body } = require("express-validator");

const postValidation = [
  body('postTitle').isString().isLength({ min: 2, max: 150 }),
  body('photoURL').isString(),
  body('postBody').isString(),
];

module.exports = {
  postValidation,
};
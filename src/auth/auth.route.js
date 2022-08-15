const express = require("express");
const authRouter = express.Router();
const authController = require("./auth.controller");
const { validate } = require("../middleware/validation");
const { authValidation } = require("../middleware/auth.validation");

/**
 * @swagger
 *  /auth/login:
 *    post:
 *      summary: Get the JWT
 *      description: Get a JWT
 *      tags:
 *        - Auth
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - email
 *                - password
 *              properties:
 *                email:
 *                  type: string
 *                  example: dim@mail.com
 *                password:
 *                  type: string
 *                  example: myPassword
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                example: Success
 *        '401':
 *          description: Authorization failed
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                example: Not authorized
 */
authRouter.post("/login", authValidation, validate, authController.login);

module.exports = authRouter;
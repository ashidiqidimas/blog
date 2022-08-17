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
 *                  example: test1@mail1.com
 *                password:
 *                  type: string
 *                  example: superStrongPassword
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  accessToken:
 *                    type: string
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1LCJpYXQiOjE2NjA3MDYzNTcsImV4cCI6MTY2MTMxMTE1N30.IG0bCoMX2EZh4CUfWhyg8X3xkEAHUdkRmO0DcViTfDw
 *        '401':
 *          description: Error Unauthorized
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                example: Email or password is wrong
 */
authRouter.post("/login", authValidation, validate, authController.login);

module.exports = authRouter;
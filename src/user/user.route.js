const express = require("express");
const userRoute = express.Router();
const userController = require("./user.controller");
const { registrationValidation } = require("../middleware/user.validation");
const { validate } = require("../middleware/validation");
const verifyToken = require("../middleware/verifyToken");


/**
 * @swagger
 *  /user/register:
 *    post:
 *      summary: API login
 *      description: Used to log in
 *      tags:
 *        - User
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - fullname
 *                - email
 *                - password
 *              properties:
 *                fullname:
 *                  type: string
 *                  example: test 1
 *                email:
 *                  type: string
 *                  example: test1@mail1.com
 *                password:
 *                  type: string
 *                  example: superStrongPassword
 *      responses:
 *        '200':
 *          description: Login success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  accessToken:
 *                    type: string
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE2NjA2OTM2MTQsImV4cCI6MTY2MDY5MzY3NH0.lHCOV-718rEY4ZwsliBsGHeMR9LAAu0azXNizLHEcM0
 *        '409':
 *          description: Error Conflict
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                example: Email already exist
 */
userRoute.post("/register", registrationValidation, validate, userController.createUser);

/**
 * @swagger
 *  /user/{userId}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      summary: Update user account
 *      description: Update user email, fullname, or password. userId in params must be the same as userId in JWT payload
 *      tags:
 *        - User
 *      parameters:
 *        - in: path
 *          name: userId
 *          type: integer
 *          required: true
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - fullname
 *                - email
 *                - password
 *              properties:
 *                fullname:
 *                  type: string
 *                  example: Dimas Ashidiqi
 *                email:
 *                  type: string
 *                  example: test1@mail1.com
 *                password:
 *                  type: string
 *                  example: superStrongPassword
 *      responses:
 *        '200':
 *          description: Success update a user data
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
 *        '501':
 *          description: Failed while updating a user data and the operation can't be completed
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                example: Failed while updating a user data
 */
userRoute.put("/:userId", registrationValidation, validate, verifyToken, userController.updateUser);

module.exports = userRoute;
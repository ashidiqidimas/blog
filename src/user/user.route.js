const express = require("express");
const userRoute = express.Router();
const userController = require("./user.controller");
const { registrationValidation } = require("../middleware/user.validation");
const { validate } = require("../middleware/validation");


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
 *                  example: Dimas Ashidiqi
 *                email:
 *                  type: string
 *                  example: dimas@ashidiqi.com
 *                password:
 *                  type: string
 *                  example: superStrongPassword
 *      responses:
 *        '200':
 *          description: Login success
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
userRoute.post("/register", registrationValidation, validate, userController.createUser);

/**
 * @swagger
 *  /user/:userId:
 *    put:
 *      summary: Update user account
 *      description: Update user email, fullname, or password
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
 *                  example: Dimas Ashidiqi
 *                email:
 *                  type: string
 *                  example: dimas@ashidiqi.com
 *                password:
 *                  type: string
 *                  example: superStrongPassword
 *      responses:
 *        '200':
 *          description: Login success
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
userRoute.put(":userId", registrationValidation, validate, userController.updateUser);

module.exports = userRoute;
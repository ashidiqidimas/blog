const postController = require("./post.controller");
const verifyToken = require("../middleware/verifyToken");
const express = require("express");
const { postValidation } = require("../middleware/post.validation");
const { validate } = require("../middleware/validation");
const postRouter = express.Router();

/**
 * @swagger
 *  /post/:
 *    get:
 *      summary: Get all post
 *      description: Get all post
 *      tags:
 *        - Post
 *      responses:
 *        '200':
 *          description: Success created a post
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  postTitle:
 *                    type: string
 *                  photoURL:
 *                    type: string
 *                  postBody:
 *                    type: string
 *        '401':
 *          description: Authorization failed
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                example: Not authorized
 */
postRouter.get("/", postController.getAllPost);

/**
 * @swagger
 *  /post/:userId:
 *    get:
 *      summary: Get all post from a user
 *      description: Get all post from a user
 *      tags:
 *        - Post
 *      responses:
 *        '200':
 *          description: Success created a post
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  postTitle:
 *                    type: string
 *                  photoURL:
 *                    type: string
 *                  postBody:
 *                    type: string
 *        '401':
 *          description: Authorization failed
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                example: Not authorized
 */
postRouter.get("/:userId", postController.getPostForUser);

/**
 * @swagger
 *  /post/:postId:
 *    get:
 *      summary: Get a specific post
 *      description: Get details of a post
 *      tags:
 *        - Post
 *      responses:
 *        '200':
 *          description: Success created a post
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  postTitle:
 *                    type: string
 *                  photoURL:
 *                    type: string
 *                  postBody:
 *                    type: string
 *        '401':
 *          description: Authorization failed
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                example: Not authorized
 */
postRouter.get("/post/:postId", postController.getPost);

/**
 * @swagger
 *  /post/create:
 *    post:
 *      summary: Create a post
 *      description: Create a post that contains title, URL to a photo, and body
 *      tags:
 *        - Post
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - postTitle
 *                - photoURL
 *                - postBody
 *              properties:
 *                postTitle:
 *                  type: string
 *                  example: Very cool title
 *                photoURL:
 *                  type: string
 *                  example: example.com/exp.png
 *                postBody:
 *                  type: string
 *                  example: This is a body
 *      responses:
 *        '200':
 *          description: Success created a post
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
postRouter.post("/create", verifyToken, postValidation, validate, postController.createPost);

/**
 * @swagger
 *  /post/update:
 *    post:
 *      summary: Update a post
 *      description: Update a post with title, URL to a photo, and body
 *      tags:
 *        - Post
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - postTitle
 *                - photoURL
 *                - postBody
 *              properties:
 *                postTitle:
 *                  type: string
 *                  example: Very cool title
 *                photoURL:
 *                  type: string
 *                  example: example.com/exp.png
 *                postBody:
 *                  type: string
 *                  example: This is a body
 *      responses:
 *        '200':
 *          description: Success updated a post
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
postRouter.put("/update", verifyToken, postValidation, validate, postController.updatePost);

module.exports = postRouter;
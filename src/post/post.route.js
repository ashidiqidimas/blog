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
 *  /post/user/{userId}:
 *    get:
 *      summary: Get all post from a user
 *      description: Get all post from a user
 *      tags:
 *        - Post
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *            type:
 *              integer
 *            required: true
 *            description: Numeric ID of the user to get
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  post_id:
 *                    type: integer
 *                    example: 1
 *                  user_id:
 *                    type: integer
 *                    example: 1
 *                  post_title:
 *                    type: string
 *                    example: this is a title
 *                  photo_URL:
 *                    type: string
 *                    example: photo.png
 *                  post_body:
 *                    type: string
 *                    example: body of the article
 *                  created_at:
 *                    type: string
 *                    example: 2022-08-09T10:20:38.641Z
 *                  updated_at:
 *                    type: string
 *                    example: 2022-08-09T10:20:38.641Z
 */
postRouter.get("/user/:userId", postController.getPostForUser);

/**
 * @swagger
 *  /post/{postId}:
 *    get:
 *      summary: Get a specific post
 *      description: Get details of a post
 *      tags:
 *        - Post
 *      parameters:
 *        - in: path
 *          name: postId
 *          schema:
 *            type:
 *              integer
 *            required: true
 *            description: The primary key of the post
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  post_title:
 *                    type: string
 *                    example: my title
 *                  photo_URL:
 *                    type: string
 *                    example: photo.png
 *                  post_body:
 *                    type: string
 *                    example: my body
 *                  created_at:
 *                    type: string
 *                    example: 2022-08-09T10:20:38.641Z
 *                  updated_at:
 *                    type: string
 *                    example: 2022-08-09T10:20:38.641Z
 */
postRouter.get("/:postId", postController.getPost);

/**
 * @swagger
 *  /post/create:
 *    post:
 *      security:
 *        - bearerAuth: []
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
 *  /post/update/{postId}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      summary: Update a post
 *      description: Update a post with title, URL to a photo, and body
 *      tags:
 *        - Post
 *      parameters:
 *        - in: path
 *          name: postId
 *          schema:
 *            type:
 *              integer
 *            required: true
 *            description: The primary key of the post
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
 *        '500':
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                example: Failed while updating a post
 */
postRouter.put("/update/:postId", verifyToken, postValidation, validate, postController.updatePost);

module.exports = postRouter;
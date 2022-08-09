const postController = require("./post.controller");
const verifyToken = require("../middleware/verifyToken");
const express = require("express");
const postRouter = express.Router();

postRouter.get("/user", postController.getPostForUser);
postRouter.get("/:postId", postController.getPostForUser);
postRouter.get("/", postController.getAllPost);

postRouter.post("/create", verifyToken, postController.createPost);
postRouter.post("/update", verifyToken, postController.updatePost);

module.exports = postRouter;
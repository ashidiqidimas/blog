const constService = require("./post.service");

const getPostForUser = async (req, res) => {
  const authUser = req.auth;
  const userId = authUser.user_id;

  if (!userId) return res.status(401).send("Can't find user id in authorization")

  try {
    const posts = await constService.getUserPost(userId);
    return res.json(posts);
  } catch (e) {
    res.status(e.code).send(e.message);
  }
};

const getPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await constService.getPost(postId);
    return res.json(post);
  } catch (e) {
    res.status(e.code).send(e.message);
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await constService.getAllPost();
    return res.json(posts);
  } catch (e) {
    res.status(e.code).send(e.message);
  }
};

const createPost = async (req, res) => {
  const { postTitle, photoURL, postBody } = req.body;
  const authUser = req.auth;
  try {
    await constService.createPost({
      userId: authUser.user_id, postTitle, photoURL, postBody,
    });
    return res.send("Success");
  } catch (e) {
    res.status(e.code).send(e.message);
  }
};

const updatePost = async (req, res) => {
  const { postTitle, photoURL, postBody } = req.body;
  const authUser = req.auth;
  try {
    await constService.updatePost({
      userId: authUser.user_id, postTitle, photoURL, postBody,
    });
    return res.send("Success");
  } catch (e) {
    res.status(e.code).send(e.message);
  }
};

const postController = {
  getPost,
  getAllPost,
  getPostForUser,
  createPost,
  updatePost
};

module.exports = postController;
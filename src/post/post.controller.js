const constService = require("./post.service");

const getPostForUser = async (req, res) => {
  const { userId } = req.body;

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
  if (!authUser) return res.status(401).send("Authorization failed");
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
  const { userId } = req.params;
  const authUser = req.auth;
  if (!authUser) return res.status(401).send("Authorization failed");

  if (userId !== authUser) {
    const err = new Error("Not authorized");
    err.code = 401;
    return res.json(err);
  }
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
  updatePost,
};

module.exports = postController;
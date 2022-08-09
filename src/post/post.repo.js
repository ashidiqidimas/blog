const { Post } = require("../database/models");

const findAllPost = async () => {
  return await Post.findAll();
};

const findUserPost = async (userId) => {
  return await Post.findAll({ where: { user_id: userId } });
};

const findPost = async (postId) => {
    return await Post.findByPk(postId);
};

const createPost = async ({ userId, postTitle, photoURL, postBody }) => {
  return await Post.create({
    user_id: userId,
    post_title: postTitle,
    photo_URL: photoURL,
    post_body: postBody,
  });
};

const updatePost = async ({ userId, postTitle, photoURL, postBody }) => {
  try {
    const post = await findPost({ userId });
    await post.update({
      user_id: userId,
      post_title: postTitle,
      photo_URL: photoURL,
      post_body: postBody,
    });
  } catch (e) {
    throw e;
  }
};

const postRepo = {
  findAllPost,
  findUserPost,
  findPost,
  createPost,
  updatePost,
};

module.exports = postRepo;
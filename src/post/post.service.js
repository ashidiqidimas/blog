const postRepo = require("./post.repo");

const getPost = async (postId) => {
  return new Promise(async (resolve, reject) => {
    const post = await postRepo.findPost(postId);
    if (post) {
      resolve(post);
    } else {
      const error = new Error("Post not exist");
      error.code = 404;
      reject(error);
    }
  });
};

const getUserPost = async (userId) => {
  return new Promise(async (resolve, reject) => {
    const post = await postRepo.findUserPost(userId);
    resolve(post)
  });
};

const getAllPost = async () => {
  return new Promise(async (resolve, reject) => {
    const post = await postRepo.findAllPost();
    if (post) {
      resolve(post);
    } else {
      const error = new Error("Unknown Error");
      error.code = 500;
      reject(error);
    }
  });
};

const updatePost = async ({ postId, postTitle, photoURL, postBody }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const editedPost = await postRepo.updatePost({
        postId, postTitle, photoURL, postBody,
      });
      resolve(editedPost);
    } catch (e) {
      const error = new Error("Failed while updating a post");
      error.code = 500;
      reject(error);
    }
  });
};

const createPost = async ({ userId, postTitle, photoURL, postBody }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newPost = await postRepo.createPost({
        userId, postTitle, photoURL, postBody,
      });
      resolve(newPost);
    } catch (e) {
      const error = new Error("Failed while create a new post");
      error.code = 401;
      reject(error);
    }
  });
};

const postService = {
  getUserPost,
  getAllPost,
  getPost,
  createPost,
  updatePost
};

module.exports = postService;
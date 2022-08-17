const bcrypt = require("bcrypt");
const userRepo = require("./user.repo");

const createUser = ({ email, password, fullname }) => {
  return new Promise(async (resolve, reject) => {
    // check if a user with the given email already exist
    const dbUser = await userRepo.findUser(email);

    if (dbUser) {
      const error = new Error("Email already exist");
      error.code = 409;
      reject(error);
    } else {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userRepo.createUser({
          email, password: hashedPassword, fullname,
        });
        resolve(`Success created new user with email ${newUser.email}`);
      } catch (e) {
        reject(e);
      }
    }
  });
};

const updateUser = async ({ fullname, email, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const editedPost = await userRepo.updateUser({
        email, password, fullname,
      });
      resolve(editedPost);
    } catch (e) {
      const error = new Error("Failed while updating a user data");
      error.code = 501;
      reject(error);
    }
  });
};

const userService = {
  createUser,
  updateUser,
};

module.exports = userService;
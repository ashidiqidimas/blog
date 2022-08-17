const { User } = require("../database/models");

const findUser = async (email) => {
  return await User.findOne({ where: { email } });
};

const createUser = async ({ email, password, fullname }) => {
  return await User.create({
    fullname,
    email,
    password,
  });
};

const updateUser = async ({ email, password, fullname }) => {
  try {
    const user = await findUser(email);
    await user.update({
      email,
      password,
      fullname,
    });
  } catch (e) {
    throw e;
  }
};

const userRepo = {
  findUser,
  createUser,
  updateUser,
};

module.exports = userRepo;
const {User} = require("../database/models");

const findUser = async (email) => {
  return await User.findOne({ where: {email}, raw: true });
};

const createUser = async ({email, password, fullname}) => {
  return await User.create({
    fullname,
    email,
    password
  })
}

const userRepo = {
  findUser,
  createUser
};

module.exports = userRepo;
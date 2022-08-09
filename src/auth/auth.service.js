require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRepo = require("../user/user.repo");

const login = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    const existingUser = await userRepo.findUser(email);

    // if user not exist
    if (!existingUser) {
      const notExistError = new Error(`User with email ${email} not found`);
      notExistError.code = 404;
      reject(notExistError);
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (isPasswordCorrect) {
      const payload = { user_id: existingUser.user_id };
      const token = await jwt.sign(
        payload,
        process.env.JWT_SECRET_PASSWORD,
        { expiresIn: "1d" },
      );
      resolve({ accessToken: token});
    } else {
      const wrongPasswordError = new Error("Password is wrong");
      wrongPasswordError.code = 401;
      reject(wrongPasswordError);
    }
  });
};

const authService = {
  login,
};

module.exports = authService;
const authService = require("./auth.service");

const login = async (req, res) => {
  const {email, password} = req.body;

  try {
    await authService.login(email, password);
  } catch (e) {
    console.log(e); // TODO
  }
};

const authController = {
  login
};

module.exports = authController;
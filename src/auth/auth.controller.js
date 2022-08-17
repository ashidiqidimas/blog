const authService = require("./auth.service");

const login = async (req, res) => {
  const {email, password} = req.body;

  try {
    const token = await authService.login(email, password);
    res.json(token);
  } catch (e) {
    res.status(e.code).send(e.message);
  }
};

const authController = {
  login
};

module.exports = authController;
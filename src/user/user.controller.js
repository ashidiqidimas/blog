const userService = require("./user.service");

const createUser = async (req, res) => {
  const {fullname, email, password} = req.body;
  try {
    const newUser = await userService.createUser({
      email, password, fullname
    });
    return res.json(newUser);
  } catch (e) {
    return res.status(e.code).send(e.message);
  }
};

const userController = {
  createUser
};

module.exports = userController;
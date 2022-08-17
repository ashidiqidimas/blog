const userService = require("./user.service");

const createUser = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    const newUser = await userService.createUser({
      email, password, fullname,
    });
    return res.json(newUser);
  } catch (e) {
    return res.status(e.code).send(e.message);
  }
};

const updateUser = async (req, res) => {
  const { email, fullname, password } = req.body;

  const { userId } = req.params;
  const authUser = req.auth;

  if (userId != authUser.user_id) {
    const err = new Error("Not authorized");
    err.code = 401;
    return res.status(401).json(err);
  }

  try {
    await userService.updateUser({
      email, fullname, password
    });
    return res.send("Success");
  } catch (e) {
    res.status(e.code).send(e.message);
  }
};

const userController = {
  createUser,
  updateUser,
};

module.exports = userController;
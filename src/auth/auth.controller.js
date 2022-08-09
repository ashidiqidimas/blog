const authService = require("./auth.service");

const login = async (req, res) => {
  const {email, password} = req.body;

  try {
    const token = await authService.login(email, password);
    console.log(token);
    res.json(token);
  } catch (e) {
    res.status(e.code).send(e.message);
  }
};

const authController = {
  login
};

module.exports = authController;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjAwMzY3MDEsImV4cCI6MTY2MDEyMzEwMX0.hQqIev7F6k4W5o3a47yJID44KVIAd14HNVr9bqB8r9g
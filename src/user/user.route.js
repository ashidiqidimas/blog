const express = require("express");
const userRoute = express.Router();
const userController = require("./user.controller");

userRoute.post("/register", userController.createUser);

module.exports = userRoute;
require("dotenv").config();
const port = process.env.PORT || 8000;

const express = require("express");
const authRouter = require("./src/auth/auth.route");
const userRoute = require("./src/user/user.route");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
})

app.use("/auth", authRouter);
app.use("/user", userRoute);

app.listen(port, () => console.log(`Server listening to port: ${port}`));
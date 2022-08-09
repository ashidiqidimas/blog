require("dotenv").config();
const port = process.env.PORT || 8000;

const express = require("express");
const authRouter = require("./src/auth/auth.route");
const userRoute = require("./src/user/user.route");
const postRoute = require("./src/post/post.route");
const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/user", userRoute);
app.use("/post", postRoute);

app.get("/", (req, res) => {
  res.send("Hello!");
})

app.listen(port, () => console.log(`Server listening to port: ${port}`));
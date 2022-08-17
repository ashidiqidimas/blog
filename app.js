require("dotenv").config();
const port = process.env.PORT || 8000;

const express = require("express");
const authRouter = require("./src/auth/auth.route");
const userRoute = require("./src/user/user.route");
const postRoute = require("./src/post/post.route");

const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./src/config/swagger");

const app = express();

app.use(express.json());

// const options = {
//   swaggerOptions: {
//     authAction: {
//       JWT: {
//         name: "JWT",
//         schema: { type: "apiKey", in: "header", name: "Authorization", description: "" },
//         value: "Bearer $2b$10$ZYiMFwjLxaIbVt.ECfy9HODvOAnq7SaNXQPMlyEp90TcNGrHwrNwC",
//       },
//     },
//   },
// };

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("/auth", authRouter);
app.use("/user", userRoute);
app.use("/post", postRoute);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => console.log(`Server listening to port: ${port}`));
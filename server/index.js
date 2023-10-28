const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8001;
const authRouter = require("./routers/auth");
const profileRoute = require("./routers/profile");
const homeRoute = require("./routers/home");
const groupRoute = require("./routers/group");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRouter);
app.use(homeRoute);
app.use(profileRoute);
app.use(groupRoute);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const path = require("path")


require("dotenv").config({ path: "backend/config/.env" });


app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

const post = require("./routers/post");
const user = require("./routers/user")
app.use("/api/v1", post)
app.use("/api/v1", user)

app.use(express.static(path.resolve(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports = app;

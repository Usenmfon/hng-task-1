const express = require("express");
const { json } = require("express");
const cors = require("cors");
// const routes = require("./src/routes/profileRoute")

const app = express();

app.use(cors());

app.use(json());

// app.use("/", routes);

app.get("/", function (req, res) {
  let data = {
    slackUsername: "usenmfonuko",
    backend: true,
    age: 26,
    bio: "I'm a backend developer using nodejs and I love reading",
  };
  res.status(200).json(data);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});

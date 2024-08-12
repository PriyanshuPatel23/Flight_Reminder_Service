const express = require("express");
const bodyparser = require("body-parser");

const { PORT } = require("./config/ServerConfig");

const SetupandStartServer = () => {
  const app = express();

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`);
  });
};

SetupandStartServer();

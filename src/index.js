const express = require("express");
const bodyparser = require("body-parser");

const { PORT } = require("./config/ServerConfig");
const { sendBasicMail } = require("./services/email-services");

const SetupandStartServer = () => {
  const app = express();

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`);
    sendBasicMail(
      "bookingservices236@gmail.com",
      "bookingservices236@gmail.com",
      "Testing email",
      "This is testing mail sent for no reason"
    );
  });
};

SetupandStartServer();

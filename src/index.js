const express = require("express");
const bodyparser = require("body-parser");

const { PORT } = require("./config/ServerConfig");
const jobs = require("./utils/job");
const ApiRoutes = require("./routes/index");
const { createChannel, subscribeMessage } = require("./utils/message-queue");
const { REMINDER_BINDING_KEY } = require("./config/ServerConfig");
const EmailService = require("./services/email-services");

const SetupandStartServer = async () => {
  const app = express();

  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));

  const channel = await createChannel();
  subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);

  app.use("/api", ApiRoutes);

  app.get("/", (req, res) => {
    res.send("Welcome, your app is working well");
  });

  app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`);
    jobs();
  });
};

SetupandStartServer();

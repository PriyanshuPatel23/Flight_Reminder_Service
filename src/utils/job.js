const cron = require("node-cron");
const emailservice = require("../services/email-services");

const setupJobs = () => {
  cron.schedule("*/2 * * * *", async () => {
    const response = await emailservice.fetchPendingMails();
    console.log(response);
  });
};

module.exports = setupJobs;

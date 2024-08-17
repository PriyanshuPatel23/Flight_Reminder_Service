const cron = require("node-cron");
const emailservice = require("../services/email-services");

const setupJobs = () => {
  cron.schedule("*/2 * * * *", async () => {
    const response = await emailservice.fetchPendingMails();
    response.forEach((email) => {
      emailservice.sendBasicMail(
        "reminderservices@airliners.com",
        email.recepientEmail,
        email.subject,
        email.content
      );
    });
  });
};

module.exports = setupJobs;

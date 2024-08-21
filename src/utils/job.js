const cron = require("node-cron");
const emailservice = require("../services/email-services");
const sender = require("../config/emailConfig");

const setupJobs = () => {
  cron.schedule("*/2 * * * *", async () => {
    const response = await emailservice.fetchPendingMails();
    response.forEach((email) => {
      sender.sendMail(
        {
          to: email.recepientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log(info);
            await emailservice.updateTicket(email.id, { status: "SUCCESS" });
          }
        }
      );
    });
  });
};

module.exports = setupJobs;

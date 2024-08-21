const sender = require("../config/emailConfig");
const ticketRepository = require("../repository/ticket-repository");
const repo = new ticketRepository();

const sendBasicMail = (mailFrom, mailTo, mailSubject, mailBody) => {
  sender.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: mailSubject,
    text: mailBody,
  });
};

const createTicket = async (data) => {
  try {
    const response = await repo.createTicket(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const fetchPendingMails = async () => {
  try {
    const response = await repo.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async (ticketId, data) => {
  try {
    const ticket = await repo.update(ticketId, data);
    return ticket;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendBasicMail,
  fetchPendingMails,
  createTicket,
  updateTicket
};

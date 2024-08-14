const nodemailer = require("nodemailer");
const { EMAILID, EMAILPASS } = require("./ServerConfig");

const sender = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: EMAILID,
    pass: EMAILPASS,
  },
});

module.exports = sender;

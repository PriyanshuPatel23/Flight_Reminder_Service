const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  EMAILID: process.env.EMAIL_ID,
  EMAILPASS: process.env.EMAIL_PASS,
};

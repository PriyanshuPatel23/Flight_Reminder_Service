const { response } = require("express");
const ticketService = require("../services/email-services");

const create = async (req, res) => {
  try {
    const user = await ticketService.createTicket(req.body);
    return res.status(201).json({
      success: true,
      data: user,
      err: {},
      message: "successfully registered an email",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: response,
      err: error,
      message: "unable to register the email",
    });
  }
};

module.exports = {
  create,
};

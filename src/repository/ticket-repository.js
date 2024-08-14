const { Op } = require("sequelize");
const { NotificationTicket } = require("../models/index");

class ticketRepository {
  async getAll() {
    try {
      const ticket = await NotificationTicket.findAll();
      return ticket;
    } catch (error) {
      throw error;
    }
  }

  async createTicket(data) {
    try {
      const ticket = await NotificationTicket.create(data);
      return ticket;
    } catch (error) {
      throw error;
    }
  }

  async get(filter) {
    try {
      const ticket = await NotificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: new Date(),
          },
        },
      });
      return ticket;
    } catch (error) {}
  }
}

module.exports = ticketRepository;

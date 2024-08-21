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
    } catch (error) {
      console.log(error);
    }
  }

  async update(ticketId, data) {
    try {
      const ticket = await NotificationTicket.findByPk(ticketId);
      if (data.status) {
        ticket.status = data.status;
        await ticket.save();
        return ticket;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ticketRepository;

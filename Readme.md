# Notification Service

## Overview

The **Notification Service** handles the scheduling and sending of notifications via email. It uses **RabbitMQ** for message queuing and **AMQP** as the client library, ensuring efficient and reliable delivery.

---

## Project Setup

### Steps to Set Up the Project

1. **Clone the Repository**
   `git clone https://github.com/PriyanshuPatel23/Flight_Reminder_Service.git`

2. **Install Dependencies**
   `npm install`

3. **Set Up Environment Variables Create a .env file in the root directory with the following:**

```bash
PORT=3003
SYNC_DB=true
EMAIL_ID=your_email_id
EMAIL_PASS=your_email_app_password
EXCHANGE_NAME=NOTIFICATION_EXCHANGE
REMINDER_BINDING_KEY=NOTIFICATION_SERVICE
MESSAGE_BROKER_URL=amqp://localhost
```

4. **Database Configuration Create a config.json file inside the src/config folder:**

```bash
{
  "development": {
    "username": "root",
    "password": null,
    "database": "NOTIFICATION_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

5. **Initialize Sequelize**

```bash
npx sequelize init
npx sequelize db:create
npx sequelize db:migrate

```

### NotificationTicket Table

- Attributes:

- subject: Subject of the notification (String, required).
- content: Body content of the notification (String, required).
- recepientEmail: Email address of the recipient (String, required).
- status: Current status of the notification (Enum: PENDING, SUCCESS, FAILED).
- notificationTime: Scheduled time for the notification (Date, required).
- Relationships: This model currently does not have external associations but is designed to be modular and scalable for future integrations.

### development commands

```
npx sequelize model:generate --name NotificationTicket --attributes subject:string,content:string,recepientEmail:string,status:enum,notificationTime:date
```

`npx sequelize db:migrate`

```
npx sequelize seed:generate --name add-notifications
npx sequelize db:seed:all
```

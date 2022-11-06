require("dotenv").config();

module.exports = {
  APP_SECRET: process.env.JWT_SECRET,
  DATABASE: process.env.APP_DB,
  PORT: process.env.APP_PORT
};


const _ = require('lodash');
const Sequelize = require('sequelize');
const path = require('path');
const debug = require('debug')('ehb');

module.exports = (app) => {
  const env = app.get('env');
  const database = process.env.SEQUELIZE_DATABASE;
  const username = process.env.SEQUELIZE_USERNAME;
  const password = process.env.SEQUELIZE_PASSWORD;
  const hostname = process.env.SEQUELIZE_HOSTNAME || 'localhost';
  if (username) {
    const sequelize = new Sequelize(database, username, password, {
      host: hostname,
      dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    });
    sequelize
      .authenticate()
      .then(() => {
        debug('Connection has been established successfully.');
        sequelize.import(path.join(__dirname, '../models/sequelize/user'));
        if ('development' === env) {
          sequelize.sync({ force: false, alter: true /*logging: debug*/ });
        }
      })
      .catch((err) => {
        debug('Unable to connect to the database:', err);
      });
    app.sequelize = sequelize;
  }
  return (req, res, next) => {
    next();
  };
};

const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;

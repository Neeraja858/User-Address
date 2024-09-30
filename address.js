const Sequelize = require('sequelize');
const sequelize = require('../database');

const Address = sequelize.define('Address', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    }
  }
});

module.exports = Address;

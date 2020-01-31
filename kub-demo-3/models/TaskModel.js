const Sequelize = require('sequelize');
//sequelize = new Sequelize('mysql::memory:');
const sequelize = require('../database/db');

const Task = sequelize.define('Task', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      min: 3,
      max: 30
    }
  }
});

module.exports = Task;

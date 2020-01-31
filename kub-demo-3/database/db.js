const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0
    },
    socketPath: process.env.SOCKET_PATH
  }
);

sequelize
  .sync()
  .then(() => console.log('Database and tables created'))
  .catch(err => console.log('Error creating, ', err));

module.exports = sequelize;

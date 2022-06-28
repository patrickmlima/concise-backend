const { getDBConnection } = require('../config/db');
const { environment } = require('../config/env');

module.exports = async () => {
  const sequelize = getDBConnection();

  if (environment.nodeEnv === 'development') {
    await sequelize.sync({ alter: true });
  }
};

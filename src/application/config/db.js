const { Sequelize } = require('sequelize');
const { environment } = require('./env');
const { createLogger } = require('./logger');

const logger = createLogger('database');
let sequelizeInstance = undefined;

module.exports = {
  getDBConnection: () => {
    if (!sequelizeInstance) {
      sequelizeInstance = new Sequelize(
        environment.database.name,
        environment.database.username,
        environment.database.password,
        {
          host: environment.database.host,
          port: environment.database.port,
          dialect: 'mysql',
          logging: logger.debug.bind(logger),
        }
      );
    }

    return sequelizeInstance;
  },
};

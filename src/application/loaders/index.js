const expressLoader = require('./express-loader');
const dbLoader = require('./db-loader');
const globalErrorHandlerLoader = require('./error-hanlder');

const { environment } = require('../config/env');

module.exports = (appInstance) => {
  expressLoader(appInstance);
  globalErrorHandlerLoader(appInstance);

  if (environment.nodeEnv !== 'test') {
    dbLoader();
  }
};

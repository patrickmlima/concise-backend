const expressLoader = require('./express-loader');
const dbLoader = require('./db-loader');

module.exports = (appInstance) => {
  expressLoader(appInstance);
  dbLoader();
};

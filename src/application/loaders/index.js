const expressLoader = require('./express-loader');

module.exports = (appInstance) => {
  expressLoader(appInstance);
};

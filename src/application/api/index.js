const defaultRouter = require('./controllers/default');
const apiDocsRouter = require('./controllers/api-docs');

module.exports = (appInstance) => {
  appInstance.use('/', defaultRouter);
  appInstance.use('/api-docs', apiDocsRouter);
};

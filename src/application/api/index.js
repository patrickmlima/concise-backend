const defaultRouter = require('./controllers/default');
const apiDocsRouter = require('./controllers/api-docs');
const authRoutes = require('./controllers/auth');

module.exports = (appInstance) => {
  appInstance.use('/', defaultRouter);
  appInstance.use('/api-docs', apiDocsRouter);
  appInstance.use('/api/auth', authRoutes);
};

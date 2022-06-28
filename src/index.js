const express = require('express');

const { environment } = require('./application/config/env');
const initLoaders = require('./application/loaders/index');

const app = express();

initLoaders(app);

app.listen(environment.app.port, () => {
  console.log(`Server is up on port ${environment.app.port}`);
});

module.exports = app;

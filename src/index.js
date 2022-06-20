const express = require('express');

const config = require('./config/env');
const initLoaders = require('./loaders/index');

const app = express();

initLoaders(app);

app.listen(config.app.port, () => {
    console.log(`Server is up on port ${config.app.port}`);
});

module.exports = app;

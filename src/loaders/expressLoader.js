const bodyParser = require('body-parser');

const routersLoader = require('../api/index');

module.exports = (appInstance) => {
    appInstance.use(bodyParser.urlencoded({ extended: true }));
    appInstance.use(bodyParser.json());

    routersLoader(appInstance);
}

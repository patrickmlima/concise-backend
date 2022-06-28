const express = require('express');
const swaggerUi = require('swagger-ui-express');

const docsAsObject = require('../../config/docs');

const router = express.Router();

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(docsAsObject));

module.exports = router;

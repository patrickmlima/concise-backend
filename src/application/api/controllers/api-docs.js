const express = require('express');
const swaggerUi = require('swagger-ui-express');

const apiDocsReader = require('../../config/docs');

const router = express.Router();

apiDocsReader
  .loadAPIDocs()
  .then((docs) => {
    router.use('/', swaggerUi.serve);
    router.get('/', swaggerUi.setup(docs));
  })
  .catch((err) => console.error(err));

module.exports = router;

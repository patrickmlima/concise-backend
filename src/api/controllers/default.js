const express = require('express');
const config = require('../../config/env');

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Concise API - Server is running',
    documentation: `http://${config.app.ip}:${config.app.port}/api-docs`,
  });
});

module.exports = router;

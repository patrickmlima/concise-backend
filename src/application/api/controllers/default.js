const express = require('express');
const { environment } = require('../../config/env');

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Concise API - Server is running',
    documentation: `http://${environment.app.ip}:${environment.app.port}/api-docs`,
  });
});

module.exports = router;

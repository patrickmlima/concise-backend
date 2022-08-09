const { Router } = require('express');
const { commonHTTPStatus } = require('../../../core/constants');
const { createUser } = require('../../../core/use-cases/create-user');
const { createLogger } = require('../../config/logger');
const {
  UserRepository,
} = require('../../database/repositories/user-repository');

const logger = createLogger('auth-controller');

const router = Router();

router.post('/users', async (req, res, next) => {
  try {
    const newUser = await createUser(req.body, UserRepository);
    res.status(commonHTTPStatus.CREATED).send({});
  } catch (err) {
    logger.error(`Error creating new user: ${err?.message}`);
    next(err);
  }
});

module.exports = router;

const { ValidationError } = require('yup');

const { APIErrorResponse } = require('../../core/adapters/api-error-response');
const { commonHTTPStatus } = require('../../core/constants');
const {
  ApplicationException,
} = require('../../core/exceptions/application-exception');
const { createLogger } = require('../config/logger');

const logger = createLogger('global-error-handler');

module.exports = (appInstance) => {
  appInstance.use((err, req, res, next) => {
    const { message, stack, status } = err;

    const validationTypes = [ValidationError];

    let appExceptionInstance;
    if (validationTypes.some((type) => err instanceof type)) {
      appExceptionInstance = new ApplicationException(
        message,
        commonHTTPStatus.UNPROCESSABLE_ENTITY,
      );
    } else {
      appExceptionInstance = new ApplicationException(
        message,
        status || commonHTTPStatus.SERVER_ERROR,
      );
    }
    logger.error(`Exception [${status}]: ${message}`);
    logger.error(stack);
    res
      .status(appExceptionInstance.status)
      .send(APIErrorResponse.asObject(appExceptionInstance));

    return next();
  });
};

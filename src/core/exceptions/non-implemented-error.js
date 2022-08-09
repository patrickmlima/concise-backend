const { commonHTTPStatus } = require('../constants');
const { ApplicationException } = require('./application-exception');

function NonImplementedError() {
  ApplicationException.call(
    this,
    'Method not implemented',
    commonHTTPStatus.SERVER_ERROR
  );
}

NonImplementedError.prototype = Object.create(ApplicationException.prototype);
NonImplementedError.prototype.constructor = NonImplementedError;

module.exports = {
  NonImplementedError,
};

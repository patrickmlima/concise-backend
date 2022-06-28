const { Errors } = require('../constants');

function NonImplementedError() {
  Error.call(this);
  this.name = Errors.NON_IMPLEMENTED_ERROR;
  this.message = 'Method not implemented';
}

NonImplementedError.prototype = new Error();
NonImplementedError.prototype.constructor = NonImplementedError;

module.exports = {
  NonImplementedError,
};

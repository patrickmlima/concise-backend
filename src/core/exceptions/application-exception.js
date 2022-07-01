function ApplicationException(message, status) {
  Error.call(this, message);

  this.status = status;
}

ApplicationException.prototype = Object.create(Error.prototype);
ApplicationException.prototype.constructor = ApplicationException;

module.exports = { ApplicationException };

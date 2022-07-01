function ApplicationException(message, status) {
  return {
    get message() {
      return message;
    },
    get status() {
      return status;
    },
  };
}

ApplicationException.prototype = Object.create(Error.prototype);
ApplicationException.prototype.constructor = ApplicationException;

module.exports = { ApplicationException };

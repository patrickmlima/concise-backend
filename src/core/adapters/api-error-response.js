const { APIRespone } = require('./api-response');

function APIErrorResponse() {
  APIRespone.call(this);

  this.asObject = (applicationException) => ({
    message: applicationException.message,
    status: applicationException.status,
  });
}

APIErrorResponse.prototype = Object.create(APIRespone.prototype);
APIErrorResponse.prototype.constructor = APIErrorResponse;

module.exports = { APIErrorResponse: new APIErrorResponse() };

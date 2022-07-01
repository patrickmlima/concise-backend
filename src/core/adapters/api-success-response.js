const { APIRespone } = require('./api-response');

function APISuccessResponse() {
  APIRespone.call(this);

  this.asObject = (data, message) => ({
    data,
    message,
  });
}

APISuccessResponse.prototype = Object.create(APIRespone.prototype);
APISuccessResponse.prototype.constructor = APIErrorResponse;

module.exports = { APISuccessResponse: new APISuccessResponse() };

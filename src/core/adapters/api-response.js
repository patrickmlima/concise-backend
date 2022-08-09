const { NonImplementedError } = require('../exceptions/non-implemented-error');

function APIRespone() {
  this.asObject = () => {
    throw new NonImplementedError();
  };
}

module.exports = { APIRespone };

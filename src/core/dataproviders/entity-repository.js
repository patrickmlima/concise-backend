const { NonImplementedError } = require('../exceptions/non-implemented-error');

function EntityRepository() {
  this.findOne = (pk, queryOptions) => {
    throw new NonImplementedError();
  };
  this.findMany = (queryOptions) => {
    throw new NonImplementedError();
  };
  this.create = (data, pk) => {
    throw new NonImplementedError();
  };
  this.updateOne = (dataUpdate, pk, queryOptions) => {
    throw new NonImplementedError();
  };
  this.updateMany = (dataUpdate, queryOptions) => {
    throw new NonImplementedError();
  };
  this.deleteOne = (pk) => {
    throw new NonImplementedError();
  };
  this.deleteMany = (queryOptions) => {
    throw new NonImplementedError();
  };
}

module.exports = { EntityRepository };

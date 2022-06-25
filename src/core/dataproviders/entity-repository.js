const {
  NonImplementedError,
} = require('../../exceptions/non-implemented-error');

function EntityRepository() {
  this.findOne = (queryOptions) => {
    throw new NonImplementedError();
  };
  this.findAll = (queryOptions) => {
    throw new NonImplementedError();
  };
  this.create = (data, pk) => {
    throw new NonImplementedError();
  };
  this.updateOne = (pk, dataUpdate, queryOptions) => {
    throw new NonImplementedError();
  };
  this.updateAll = (dataUpdate, queryOptions) => {
    throw new NonImplementedError();
  };
  this.deleteOne = (pk) => {
    throw new NonImplementedError();
  };
}

module.exports = { EntityRepository };

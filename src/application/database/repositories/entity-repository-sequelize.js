const {
  EntityRepository,
} = require('../../../core/dataproviders/entity-repository');

function EntityRepositorySequelize(model) {
  EntityRepository.call(this);

  const addPkObjectIfExists = (pk, query) => ({
    ...(pk ? { where: { ...pk, ...query?.where } } : undefined),
    ...query,
  });

  this.findOne = (pk, queryOptions) =>
    model.findOne(addPkObjectIfExists(pk, queryOptions));

  this.findMany = (queryOptions) => model.findAll(queryOptions);

  this.create = (data, pk) => model.create({ ...data, ...pk });

  this.updateOne = (dataUpdate, pk, queryOptions) =>
    model.update(dataUpdate, addPkObjectIfExists(pk, queryOptions));

  this.updateMany = (dataUpdate, queryOptions) =>
    this.updateOne(dataUpdate, queryOptions);

  this.deleteOne = (pk) => model.delete(addPkObjectIfExists(pk));

  this.deleteMany = (queryOptions) => model.delete(queryOptions);
}

EntityRepositorySequelize.prototype = new EntityRepository();
EntityRepositorySequelize.prototype.constructor = EntityRepositorySequelize;

module.exports = { EntityRepositorySequelize };

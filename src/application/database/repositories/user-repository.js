const { EntityRepositorySequelize } = require('./entity-repository-sequelize');
const { User } = require('../models/user-model');

function UserRepository() {
  EntityRepositorySequelize.call(this, User);
}

UserRepository.prototype = new EntityRepositorySequelize();
UserRepository.prototype.constructor = UserRepository;

module.exports = { UserRepository: new UserRepository() };

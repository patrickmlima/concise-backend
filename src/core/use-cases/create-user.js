const { User } = require('../entities/user');
const { userSchema } = require('./validators/user-schema');

exports.createUser = async (
  { email, firstName, lastName, birthDate, password },
  entityRepository,
) => {
  const userData = {
    email,
    firstName,
    lastName,
    birthDate,
    password,
  };

  const validatedUserData = await userSchema.validate(userData);
  const data = { ...validatedUserData };

  const user = new User(data);

  const persistedUser = await entityRepository.create(user);

  return persistedUser;
};

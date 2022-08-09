const { UniqueConstraintError } = require('sequelize');
const { ValidationError } = require('yup');
const { commonHTTPStatus } = require('../../../src/core/constants');
const {
  EntityRepository,
} = require('../../../src/core/dataproviders/entity-repository');

const { createUser } = require('../../../src/core/use-cases/create-user');

describe('User creation', function () {
  beforeEach(function () {
    this.userData = {
      email: 'inexistentemail@tests.com',
      firstName: 'Simple',
      lastName: 'Test',
      birthDate: '1990-04-01',
      password: 'aweakpassword',
    };
  });

  it('User email format is incorrect', async function () {
    this.userData = {
      ...this.userData,
      email: 'incorrectmailATtests.com',
    };

    try {
      const res = await createUser(this.userData, new EntityRepository());
    } catch (err) {
      expect(err).toBeTruthy();
      expect(err).toBeInstanceOf(ValidationError);
    }
  });

  it('User first name is empty', async function () {
    this.userData = {
      ...this.userData,
      firstName: '',
    };

    try {
      await createUser(this.userData, new EntityRepository());
    } catch (err) {
      expect(err).toBeTruthy();
      expect(err).toBeInstanceOf(ValidationError);
    }
  });

  it('User last name is empty', async function () {
    this.userData = {
      ...this.userData,
      lastName: '',
    };
    try {
      await createUser(this.userData, new EntityRepository());
    } catch (err) {
      expect(err).toBeTruthy();
      expect(err).toBeInstanceOf(ValidationError);
    }
  });

  it('User birth date is invalid', async function () {
    this.userData = {
      ...this.userData,
      birthDate: 'notadate',
    };

    try {
      await createUser(this.userData, new EntityRepository());
    } catch (err) {
      expect(err).toBeTruthy();
      expect(err).toBeInstanceOf(ValidationError);
    }
  });

  it('User password do not match requirements', async function () {
    this.userData = {
      ...this.userData,
      password: '123',
    };

    try {
      await createUser(this.userData, new EntityRepository());
    } catch (err) {
      expect(err).toBeTruthy();
      expect(err).toBeInstanceOf(ValidationError);
    }
  });

  it('User email is not unique', async function () {
    const repository = new EntityRepository();
    this.sinonSandbox
      .stub(repository, 'create')
      .throws(
        new UniqueConstraintError({ message: 'Provided email already used' }),
      );

    try {
      await createUser(this.userData, repository);
    } catch (err) {
      expect(err).toBeTruthy();
      expect(err).toBeInstanceOf(UniqueConstraintError);
    }
  });

  it('User data is valid', async function () {
    const repository = new EntityRepository();

    const userId = { id: 1 };

    this.sinonSandbox
      .stub(repository, 'create')
      .returns({ ...this.userData, ...userId });

    try {
      const newUser = await createUser(this.userData, repository);

      expect(newUser).toBeDefined();
      expect(newUser.id).toBeGreaterThan(0);
    } catch (err) {}
  });
});

const { Model, DataTypes } = require('sequelize');

const { getDBConnection } = require('../../config/db');

const sequelize = getDBConnection();

const user = sequelize.define(
  'Users',
  {
    email: {
      type: DataTypes.STRING(320),
      allowNull: false,
      unique: 'emailIndex',
    },
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: 'Users',
  }
);

console.log('is equals to user? ', user === sequelize.models.user);

module.exports = { User: user };

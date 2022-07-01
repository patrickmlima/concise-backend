const { DataTypes } = require('sequelize');

const { getDBConnection } = require('../../config/db');

const sequelize = getDBConnection();

const user = sequelize.define(
  'Users',
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
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
    modelName: 'User',
    tableName: 'Users',
  },
);

module.exports = { User: user };

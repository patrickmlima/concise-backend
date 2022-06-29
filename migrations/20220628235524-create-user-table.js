module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Users',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        email: {
          type: Sequelize.STRING(320),
          allowNull: false,
          unique: 'emailIndex',
        },
        firstName: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        birthDate: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        modelName: 'User',
        tableName: 'Users',
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  },
};

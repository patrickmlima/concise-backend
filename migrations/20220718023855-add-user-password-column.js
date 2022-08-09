module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'password', {
      type: Sequelize.DataTypes.STRING(60).BINARY,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Users', 'password');
  },
};

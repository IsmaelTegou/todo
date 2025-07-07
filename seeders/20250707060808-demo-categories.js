'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        nom: 'Chants d\'entrée',
        description: 'Chants utilisés au début de la messe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nom: 'Gloria',
        description: 'Chants pour glorifier Dieu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nom: 'Chants de communion',
        description: 'Chants pendant la distribution de la communion',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};

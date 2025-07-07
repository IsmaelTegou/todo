'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Chants', [
      {
        titre: 'Ouvrons nos cœurs',
        description: 'Chant pour l’entrée',
        pdfUrl: 'uploads/louer.pdf',
        audioUrl: 'uploads/louer.mp3',
        categorieId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titre: 'Gloire à Dieu au plus haut des cieux',
        description: 'Gloria traditionnel',
        pdfUrl: 'uploads/alleluya.pdf',
        audioUrl: 'uploads/alleluya.mp3',
        categorieId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Chants', null, {});
  }
};

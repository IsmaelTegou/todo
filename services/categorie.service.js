const { Categorie, Chant } = require('../models');

module.exports = {
  async createCategorie(data) {
    return await Categorie.create(data);
  },

  async getAllCategories() {
    return await Categorie.findAll({
      include: { model: Chant, as: 'chants' },
      order: [['createdAt', 'DESC']]
    });
  },

  async getCategorieById(id) {
    return await Categorie.findByPk(id, {
      include: { model: Chant, as: 'chants' }
    });
  },

  async updateCategorie(id, data) {
    await Categorie.update(data, { where: { id } });
    return await Categorie.findByPk(id);
  },

  async deleteCategorie(id) {
    return await Categorie.destroy({ where: { id } });
  }
};

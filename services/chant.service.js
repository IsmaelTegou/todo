const { Chant, Categorie } = require('../models');

module.exports = {
  async createChant(data) {
    return await Chant.create(data);
  },

  async getAllChants() {
    return await Chant.findAll({
      include: {
        model: Categorie,
        as: 'categorie',
        attributes: ['id', 'nom']
      },
      order: [['createdAt', 'DESC']]
    });
  },

  async getChantById(id) {
    return await Chant.findByPk(id, {
      include: { model: Categorie, as: 'categorie' }
    });
  },

  async updateChant(id, data) {
    await Chant.update(data, { where: { id } });
    return await Chant.findByPk(id);
  },

  async deleteChant(id) {
    return await Chant.destroy({ where: { id } });
  }
};

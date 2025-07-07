const categorieService = require('../services/categorie.service');

module.exports = {
  async create(req, res) {
    try {
      const { nom, description } = req.body;
      const categorie = await categorieService.createCategorie({ nom, description });
      res.status(201).json(categorie);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    try {
      const categories = await categorieService.getAllCategories();
      res.json(categories);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const categorie = await categorieService.getCategorieById(req.params.id);
      if (!categorie) return res.status(404).json({ message: "Catégorie non trouvée" });
      res.json(categorie);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const categorie = await categorieService.updateCategorie(req.params.id, req.body);
      res.json(categorie);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      await categorieService.deleteCategorie(req.params.id);
      res.json({ message: "Catégorie supprimée avec succès" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

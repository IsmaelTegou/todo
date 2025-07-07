const chantService = require('../services/chant.service');

module.exports = {
  async create(req, res) {
    try {
      const { titre, description, categorieId } = req.body;
      const pdfUrl = req.files?.pdf?.[0]?.path;
      const audioUrl = req.files?.audio?.[0]?.path;

      const chant = await chantService.createChant({
        titre,
        description,
        pdfUrl,
        audioUrl,
        categorieId
      });

      res.status(201).json(chant);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    try {
      const chants = await chantService.getAllChants();
      res.json(chants);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const chant = await chantService.getChantById(req.params.id);
      if (!chant) return res.status(404).json({ message: "Chant non trouvé" });
      res.json(chant);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const chant = await chantService.updateChant(req.params.id, req.body);
      res.json(chant);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      await chantService.deleteChant(req.params.id);
      res.json({ message: "Chant supprimé avec succès" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

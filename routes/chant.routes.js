const express = require('express');
const router = express.Router();
const chantController = require('../controllers/chant.controller');

// Middleware pour upload (PDF + audio) — tu pourras adapter plus tard
// Exemple : utiliser multer pour gérer pdf/audio

router.post('/', chantController.create);
router.get('/', chantController.getAll);
router.get('/:id', chantController.getById);
router.put('/:id', chantController.update);
router.delete('/:id', chantController.remove);

module.exports = router;

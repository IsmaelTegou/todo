const express = require('express');
const router = express.Router();
const chantController = require('../controllers/chant.controller');
const upload = require('../middlewares/upload.middleware');

// Middleware pour upload (PDF + audio) — tu pourras adapter plus tard
// Exemple : utiliser multer pour gérer pdf/audio

router.post(
    '/', 
    upload.fields([
        {name: 'pdf', maxCount: 1},
        {name: 'audio', maxCount: 1}
    ]),
    chantController.create);
    
router.get('/', chantController.getAll);
router.get('/:id', chantController.getById);
router.put('/:id', chantController.update);
router.delete('/:id', chantController.remove);

module.exports = router;

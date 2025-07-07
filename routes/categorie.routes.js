const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorie.controller');

router.post('/', categorieController.create);
router.get('/', categorieController.getAll);
router.get('/:id', categorieController.getById);
router.put('/:id', categorieController.update);
router.delete('/:id', categorieController.remove);

module.exports = router;

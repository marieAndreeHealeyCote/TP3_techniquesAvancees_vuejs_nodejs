const express = require('express');
const router = express.Router();
const forfaitController = require('../controllers/forfaitController');

router.get('/', forfaitController.getAllForfaits);
router.get('/:id', forfaitController.getForfaitById);
router.post('/', forfaitController.createForfait);
router.put('/:id', forfaitController.updateForfait);
router.delete('/:id', forfaitController.deleteForfait);

module.exports = router;
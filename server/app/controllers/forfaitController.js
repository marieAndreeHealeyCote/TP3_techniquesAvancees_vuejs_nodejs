const forfaitModel = require('../models/forfaitModel');

exports.getAllForfaits = (req, res) => {
    forfaitModel.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur serveur' });
        }
        res.json(results);
    });
};

exports.getForfaitById = (req, res) => {
    const { id } = req.params;

    forfaitModel.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur serveur' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Forfait introuvable' });
        }

        res.json(results[0]);
    });
};

exports.createForfait = (req, res) => {
    forfaitModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la création' });
        }

        res.status(201).json({
            message: 'Forfait créé',
            id: result.insertId
        });
    });
};

exports.updateForfait = (req, res) => {
    const { id } = req.params;

    forfaitModel.update(id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la modification' });
        }

        res.json({ message: 'Forfait mis à jour' });
    });
};

exports.deleteForfait = (req, res) => {
    const { id } = req.params;

    forfaitModel.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la suppression' });
        }

        res.json({ message: 'Forfait supprimé' });
    });
};
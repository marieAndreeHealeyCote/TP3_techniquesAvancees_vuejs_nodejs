const db = require('../config/db');

exports.getAll = (callback) => {
    db.query('SELECT * FROM forfaits ORDER BY id DESC', callback);
};

exports.getById = (id, callback) => {
    db.query('SELECT * FROM forfaits WHERE id = ?', [id], callback);
};

exports.create = (data, callback) => {
    const { nom, description, prix, image, categorie } = data;

    const sql = `
    INSERT INTO forfaits (nom, description, prix, image, categorie)
    VALUES (?, ?, ?, ?, ?)
  `;

    db.query(sql, [nom, description, prix, image, categorie], callback);
};

exports.update = (id, data, callback) => {
    const { nom, description, prix, image, categorie } = data;

    const sql = `
    UPDATE forfaits
    SET nom = ?, description = ?, prix = ?, image = ?, categorie = ?
    WHERE id = ?
  `;

    db.query(sql, [nom, description, prix, image, categorie, id], callback);
};

exports.delete = (id, callback) => {
    db.query('DELETE FROM forfaits WHERE id = ?', [id], callback);
};
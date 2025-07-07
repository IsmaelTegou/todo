const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Importer manuellement les modèles
db.Categorie = require('./categorie')(sequelize, Sequelize.DataTypes);
db.Chant = require('./chant')(sequelize, Sequelize.DataTypes);

// Définir les associations
Object.values(db)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(db));

module.exports = db;

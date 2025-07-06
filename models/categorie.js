module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  });

  Categorie.associate = (models) => {
    Categorie.hasMany(models.Chant, {
      foreignKey: 'categorieId',
      as: 'chants'
    });
  };

  return Categorie;
};

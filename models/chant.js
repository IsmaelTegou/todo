module.exports = (sequelize, DataTypes) => {
  const Chant = sequelize.define('Chant', {
    titre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    pdfUrl: {
      type: DataTypes.STRING
    },
    audioUrl: {
      type: DataTypes.STRING
    }
  });

  Chant.associate = (models) => {
    Chant.belongsTo(models.Categorie, {
      foreignKey: 'categorieId',
      as: 'categorie'
    });
  };

  return Chant;
};

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      description: DataTypes.STRING,
      byGenreId: DataTypes.INTEGER,
      byAutorId: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      tableName: "books",
      paranoid: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  Book.associate = function (models) {
    Book.belongsTo(models.ByGenre, {
      as: "byGenre",
      foreignKey: "byGenreId",
    }),
      Book.belongsTo(models.ByAutor, {
        as: "byAutor",
        foreignKey: "byAutorId",
      });
  };
  return Book;
};

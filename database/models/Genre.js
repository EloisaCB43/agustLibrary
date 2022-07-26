module.exports = (sequelize, DataTypes) => {
    const ByGenre = sequelize.define('ByGenre', {
        genre: DataTypes.STRING,
    }, {
        tableName: 'genre',
        timestamps: false
    });

    ByGenre.associate = function (models) {
        ByGenre.hasMany(models.Book, {
            as: 'book',
            foreignKey: 'byGenreId',

        })
    }
    return ByGenre;
}
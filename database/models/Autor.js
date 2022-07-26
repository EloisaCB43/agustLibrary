module.exports = (sequelize, DataTypes) => {
    const ByAutor = sequelize.define('ByAutor', {
        autor: DataTypes.STRING,
    }, {
        tableName: 'autors',
        timestamps: false
    });

    ByAutor.associate = function (models) {
        ByAutor.hasMany(models.Book, {
            as: 'book',
            foreignKey: 'byAutorId',

        })
    }
    return ByAutor;
}
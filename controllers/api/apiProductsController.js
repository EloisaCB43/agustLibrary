const { Book, ByGenre, ByAutor } = require("../../database/models");

module.exports = {
  count: async (req, res) => {
    const books = await Book.findAll({ include: ["byGenre", "byAutor"] });
    const byGenre = await ByGenre.findAll({ include: ["book"] });
    const byAutor = await ByAutor.findAll({ include: ["book"] });

    let byGenreCount = {};
    let byAutorCount = {};

    for (let i = 0; i < byGenre.length; i++) {
      byGenreCount[byGenre[i].genre] = { books: byGenre[i].book.length };
    }
    for (let i = 0; i < byAutor.length; i++) {
      byAutorCount[byAutor[i].autor] = { books: byAutor[i].book.length };
    }
    
    let booksArray = books.map((oneBook) => {
      let book = {
        id: oneBook.dataValues.id,
        name: oneBook.dataValues.name,
        description: oneBook.dataValues.description,
        byGenre: oneBook.dataValues.byGenre.genre,
        byAutor: oneBook.dataValues.byAutor.autor,
        price: oneBook.dataValues.price,
        // image: `http://localhost:4000/img/products/${oneProduct.dataValues.image}`,
        // detail: `http://localhost:4000/products/detail/${oneBook.dataValues.id}`,
      };
      return book;
    });
    return res.status(200).json({
      count: books.length,
      countByCategories: {
        byGenre: byGenreCount,
        byAutor: byAutorCount,
      },
      data: booksArray,
      status: 200,
    });
  },

  detail: async (req, res) => {
    const books = await Book.findByPk(req.params.id, {include: ["byGenre", "byAutor"]})
    if(!books){
        return res.status(200).json({
            msg: "This book is no longer in stock",
            status: 204
        })
    } else {
        const oneBook = {
            id: books.dataValues.id,
            name: books.dataValues.name,
            description: books.dataValues.description,
            byGenre: books.byGenre.dataValues.genre,
            byAutor: books.byAutor.dataValues.autor,
            // image: `http://localhost:4000/img/usersImg/${books.dataValues.image}`
        }
        return res.status(200).json({
            data: oneBook,
            status: 200
        })}
    
},
    



};

const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname, '/public')
app.use(express.static(publicPath));
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended:false }));
app.use(express.json());


app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
})


const productsRouter = require ('./routes/productsRouter.js')
app.use('/', productsRouter);

const productsRouterApi = require ('./routes/api/apiProducts')
app.use('/',productsRouterApi)


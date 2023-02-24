const express = require('express');
const path = require('path');
const app = express();
const CONFIG = require('./config.json');
const CategoriesRouter = require('./routes/categories');
const ProductsRouter = require('./routes/products');

app.set('view engine', 'ejs');

const publicPath = path.join(__dirname, '/assets');
app.use(express.static(publicPath));

app.use(express.json());
app.use(express.urlencoded());

app.use('/categories', CategoriesRouter);
app.use('/products', ProductsRouter);

app.listen(CONFIG.PORT, () => {
    console.log(`Server is running at port ${CONFIG.PORT}`);
});
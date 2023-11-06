const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

const data = require('./data.json');

app.get('/products', (req, res) => {
    const query = req.query;
    let filteredProducts = data;

    if (query.availability) {
        filteredProducts = filteredProducts.filter(product => product.productStock === (query.availability === 'true'));
    }

    if (query.minPrice && query.maxPrice) {
        filteredProducts = filteredProducts.filter(product =>
            parseFloat(product.productPrice) >= parseFloat(query.minPrice) && parseFloat(product.productPrice) <= parseFloat(query.maxPrice)
        );
    }

    res.json(filteredProducts);
});

app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = data.find(product => product.productId === parseInt(productId));

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Товар не знайдено' });
    }
});

app.get('/products/byName', (req, res) => {
    const productName = req.query.productName;
    const productsByName = data.filter(product => product.productName.includes(productName));

    res.json(productsByName);
});

app.listen(3000, () => {
    console.log('Сервер працює на порту: 3000');
});
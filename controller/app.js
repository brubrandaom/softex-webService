const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const indexRoute = require('./indexRoute');
const productsRoutes = require('./productsRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productsRoutes);

module.exports = app;


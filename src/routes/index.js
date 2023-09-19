const express = require('express');
const productRouter = require('./product.router');
const cityRouter = require('./city.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/products', productRouter);
router.use('/cities', cityRouter);

module.exports = router;
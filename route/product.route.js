const express = require('express');
const { getproduct, saveproduct } = require('../controller/product.controller');
const router = express.Router();

router.get('/products', getproduct);

router.post('/products', saveproduct);

module.exports = router;
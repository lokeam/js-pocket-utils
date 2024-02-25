const express = require('express');
const { addProduct } = require('../controllers/product');

const router = express.Router();

router.post("/add-product", addProduct);

router.delete('/delete-product', (req, res, next) => {})

module.exports = router;

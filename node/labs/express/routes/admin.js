const express = require('express');
const { addProduct, deleteOne } = require('../controllers/product');

const router = express.Router();

router.post("/add-product", addProduct);

router.delete('/delete-product/:id', deleteOne)

module.exports = router;

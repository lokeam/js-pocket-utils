const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.post("/add-product", (req, res, next) => {
  const product = new Product(req.body.name, req.body.price);
  product.save();

  res.status(200).json({ message: 'Product added successfully!' });
});

router.delete('/delete-product', (req, res, next) => {})

module.exports = router;

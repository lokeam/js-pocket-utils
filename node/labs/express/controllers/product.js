const Product = require('../models/product');

exports.addProduct = async (req, res, next) => {
  const product = new Product(req.body.name, req.body.price);

  try {
    await product.save();
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }

  res.status(200).json({ message: 'Product added successfully!' });
};

exports.getAllProducts = (req, res, next) => {
  const products = Product.findAll();
  res.status(200).json({ products });
};
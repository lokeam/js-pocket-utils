const express = require('express');

const router = express.Router();

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  const product = req.body.product;
  console.log("admin router");
  res.send('<h1>response from the admin router</h2>');
});

router.delete('/delete-product', (req, res, next) => {

})

module.exports = router;

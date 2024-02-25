const express = require('express');

const router = express.Router();

router.get("/product", (req, res, next) => {
  console.log('shop router');
  res.send('<h2>shop route</h2>');
});

module.exports = router;

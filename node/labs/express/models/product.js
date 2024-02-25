const fs = require('fs');
const path = require('path');

const productDbPath = path.join(__dirname, '../db/product.json');

module.exports = class Product {
  constructor(
    name,
    price,
  ) {
    this.name = name;
    this.price = price;
  }

  async save() {
    fs.readFile(productDbPath, 'utf-8', (err, data) => {
      if (err) {
        console.log('Save error from product.js model: ', err);
        return;
      }

      const productData = JSON.parse(data);
      productData.push({
        name: this.name,
        price: this.price,
        id: productData.length + 1
      });

      fs.writeFile(productDbPath, JSON.stringify(productData), 'utf8', (err) => {
        if (err) {
          console.log('Write File error from product.js model: ', err);
          return;
        }
        console.log('Data appended sucessfully');
      })
    });
  }

  static findAll() {
    const data = fs.readFileSync(productDbPath, 'utf-8');

    return JSON.parse(data);
  }
}
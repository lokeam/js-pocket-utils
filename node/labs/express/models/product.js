const { rejects } = require('assert');
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
    return new Promise((resolve, reject) => {
      fs.readFile(productDbPath, 'utf-8', (err, data) => {
        if (err) {
          reject(err.message);
          return;
        }

        const productDbData = JSON.parse(data);
        productDbData.push({
          name: this.name,
          price: this.price,
          id: productDbData.length + 1
        });

        fs.writeFile(productDbPath, JSON.stringify(productDbData), 'utf8', (err) => {
          if (err) {
            reject(err.message);
            return;
          }
          resolve('Data appended successfully');
        })
      });
    })

  }

  static findAll() {
    const data = fs.readFileSync(productDbPath, 'utf-8');

    return JSON.parse(data);
  }

  static async deleteOne(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(productDbPath, 'utf-8', (err, data) => {
        if (err) {
          reject(err.message);
          return;
        }

        const productDbData = JSON.parse(data);
        const newProductDbData = productDbData.filter( product => {
          return product.id !== id;
        });

        fs.writeFile(productDbPath, JSON.stringify(newProductDbData), 'utf-8', (err) => {
          if (err) {
            reject(err.message);
            return;
          }

          resolve(newProductDbData);
        })
      });
    });
  }
}
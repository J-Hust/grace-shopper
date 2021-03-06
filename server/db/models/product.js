const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
   description: {
  type: Sequelize.TEXT,
  allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
})

module.exports = Product

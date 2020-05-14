// models/product.js

const mongoose = require('mongoose');
Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  seller: {
    type: [Schema.ObjectId],
    ref: 'Seller',
    required: true
  },
  description: {
    type: String
  },
  published_date: {
    type: Date
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
});


const product = mongoose.model('product', ProductSchema);
module.exports = product;
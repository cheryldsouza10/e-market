// models/order.js

const mongoose = require('mongoose');
Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
  buyer: {
    type: [Schema.ObjectId],
    ref: 'Buyer',
    required: true
  },
  product: {
    type: [Schema.ObjectId],
    ref: 'product',
    required: true
  },
  seller: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  order_date: {
    type: Date,
    default: Date.now
  }
});


const order = mongoose.model('Order', OrderSchema);
module.exports = order;
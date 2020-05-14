const mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    logged: {
        type:Number
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Buyer', BuyerSchema);
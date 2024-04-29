const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    agent: {
        type:String,
        required:true,
    },
    amount: {
        type:String,
        required:true,
    },
    parent_event: {
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('Payments',PaymentSchema );

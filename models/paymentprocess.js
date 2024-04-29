const mongoose = require('mongoose');

const PaymentProcessSchema = new mongoose.Schema({
    ruleName: {
        type:String,
        required:true,
    },
    parent_payment: {
    type:String,
        required:true,
}
});

module.exports = mongoose.model('PaymentProcessList', PaymentProcessSchema);
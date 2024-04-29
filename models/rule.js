const mongoose = require('mongoose');

const EventRuleSchema = new mongoose.Schema({
    ruleName: {
        type:String,
        required:true,
    },
    parent_event: {
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('EventRules', EventRuleSchema);
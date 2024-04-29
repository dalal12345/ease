const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    event_name: {
        type:String,
        required:true,
    },
    parent_fest: {
        type:String,
        required:true,
    },
    event_description: String,
});

module.exports = mongoose.model('Events', eventSchema);

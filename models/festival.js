const mongoose = require('mongoose');

const festivalSchema = new mongoose.Schema({
    fest_name: {
        type:String,
        required:true,
    },
    startDate: {
        type:String,
        required:true,
    },
    fest_description: {
        type: String,
    },
    mapLink: {
        type: String,
    }
});

module.exports = mongoose.model('Festivals', festivalSchema);

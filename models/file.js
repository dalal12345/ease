const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    link: {
        type:String,
        required:true,
    },
    parent_event: {
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('Files', FileSchema);
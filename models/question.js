const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    answer: String,
    parent_fest: {
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('Questions', QuestionSchema);
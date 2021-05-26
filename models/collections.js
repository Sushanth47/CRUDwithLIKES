const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const items = new Schema({
    name:{
        type:String,
        require: true
    },
    likes:{
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Item', items);
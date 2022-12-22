const mongoose = require('mongoose');

const subcategory = mongoose.Schema({
    subcategory : {
        type : String,
        required : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category',
        required : true
    }
});

module.exports = mongoose.model('subcategory',subcategory);
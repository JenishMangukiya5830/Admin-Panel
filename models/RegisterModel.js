const mongoose = require('mongoose');

const registerschema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    }
});

const registermodel = mongoose.model('login',registerschema);

module.exports = registermodel
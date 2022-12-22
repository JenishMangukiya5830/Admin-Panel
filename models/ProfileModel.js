const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    userid : {
        type : String,
        required : true
    },
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    zipcode : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    }
});

const profilemodel = mongoose.model('profile',profileSchema);

module.exports = profilemodel;
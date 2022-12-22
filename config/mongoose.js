const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/panel');

mongoose.connection 
    .on('error',(error) => {console.log('DB not Connected')})
    .once('open',() => {console.log('DB connected')});
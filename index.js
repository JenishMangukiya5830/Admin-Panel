const express = require('express');

const path = require('path');

const app = express();

const db = require('./config/mongoose');

const register = require('./models/RegisterModel');

const profile = require('./models/ProfileModel');

const flash = require('connect-flash');

const flashmoddleware = require('./config/flashmiddleware');

const passport = require('passport');

const passportLocal = require('./config/passport');

const cookie = require('cookie-parser');

const session = require('express-session');

app.use(express.urlencoded());

app.use(session({
    secret : 'register',
    saveUninitialized : true,
    resave : true,
    cookie : {
        maxAge : 1000*60*60*24
    }
}));

app.use(passport.initialize());

app.use(passport.session());

app.use(cookie());

app.use(flash());

app.use(passport.checkloginin);

app.use(flashmoddleware.flash);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/Public',express.static(path.join('Public')));

app.use('/',require('./routes'));

app.listen(3060,(err) => {
    if(err)
    {
        console.log('Server not responding');
    }
    console.log('Server responding');
})
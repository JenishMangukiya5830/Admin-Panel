const passport = require('passport');

const register = require('../models/RegisterModel');

const alert = require('alert');

const passportLocal = require('passport-local').Strategy;

passport.use( new passportLocal({
    usernameField : 'email'
},(email,password,done) => {
    register.findOne({email : email},(err,user) => {
        if(err)
        {
            alert('something went Wrong');
            return done(null,false);
        }

        if(!user)
        {
            alert('Email not Found');
            return done(null,false);
            
        }
        else
        {
            if(user.password !== password)
            {
                alert('Incorrect Password');
                return done(null,false);
            }
        }

        return done(null,user);
    })
}));

passport.serializeUser((user,done) => {
    if(user)
    {
        return done(null,user.id);
    }
});

passport.deserializeUser((id,done) => {
    register.findById(id,(err,user) => {
        if(err)
        {
            alert('User not Found');
            return done(null,false);
        }
        return done(null,user);
    })
});

passport.checkuserlogin = (req,res,next) => {
    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect('/admin/login');
}

passport.checkloginin = (req,res,next) => {
    if(req.isAuthenticated())
    {
        res.cookie('userLogin',req.user);
        res.locals.user = req.user;
    }
    return next();
}
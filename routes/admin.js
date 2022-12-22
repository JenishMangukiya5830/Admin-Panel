const express = require('express');

const passport = require('passport');

const router = express.Router();

const admincontroller = require('../Controller/AdminController')

const logincontroller = require('../Controller/loginController')

// login

router.get('/login',logincontroller.login);

router.get('/auth-login-basic',passport.checkloginin,admincontroller.login);

router.post('/dashboard/index',passport.authenticate('local',{failureRedirect : '/admin/login',successRedirect : '/dashboard/index'}),logincontroller.insertData);

// register

router.get('/auth-register-basic',passport.checkloginin,admincontroller.register);

router.post('/insertData',passport.checkloginin,logincontroller.insert);

// forgot password

router.get('/auth-forgot-password-basic',passport.checkloginin,admincontroller.forgotPassword);

router.post('/emailData',logincontroller.email);

router.get('/otp',logincontroller.getotp);

router.post('/otpData',logincontroller.otpData);

router.get('/newpass',logincontroller.newpass);

router.post('/setpass',logincontroller.setpass)



module.exports = router
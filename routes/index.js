const express = require('express');

const passport = require('passport');

const router = express.Router();

router.use('/admin',require('./admin'));
router.use('/dashboard',passport.checkuserlogin,require('./dashboard'));

module.exports = router
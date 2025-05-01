const {Staff} = require('../models/staff');
const md5 = require('md5');
const passport = require('passport');

module.exports.renderRegistrationForm = async function(req, res){
    res.render('staff/register');
}

module.exports.register = async function(req, res){
    await Staff.create({
        first_name: req.body.first_name,
        last_name:req.body.last_name,
        code:md5(req.body.password),
        password:md5(req.body.password),
        email:req.body.email,
    });
    res.redirect('/login')
}

module.exports.renderLogin = function(req, res){
    res.render('staff/login');
}

module.exports.login = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/staff-login',
    failureMessage: true
});

module.exports.logout = function(req,res) {
    req.logout();
    res.redirect('/staff-login');
}
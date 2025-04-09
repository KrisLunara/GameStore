const {User} = require('../models/user');
const md5 = require('md5');
const passport = require('passport');

module.exports.renderRegistrationForm = async function(req, res){
    res.render('users/register');
}

module.exports.register = async function(req, res){
    await User.create({
        first_name: req.body.first_name,
        last_name:req.body.last_name,
        password:md5(req.body.password),
        email:req.body.email,
    });
    res.redirect('/login')
}

module.exports.renderLogin = function(req, res){
    res.render('users/login');
}

module.exports.login = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureMessage: true
});

module.exports.logout = function(req,res) {
    req.logout();
    res.redirect('/login');
}
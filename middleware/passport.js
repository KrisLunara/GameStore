const passport = require('passport');
const{Strategy} = require('passport-local').Strategy;
const {User} = require('../models/user');
const {Staff} = require('../models/staff');
const md5 = require('md5');

//TODO make staff verify system

async function verifyUser(username, password, done){
    const user = await User.findOne({
        //TODO fix findOne not working (doesn't register function)
        where: {
            email: username,
            password: md5(password)
        }
    });
    if(!user){
        return done(null, false, {message: 'Incorrect information.'});
    }
    return done(false, {
        id: user.id,
    });
}

passport.use(
    new Strategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        verifyUser
    )
);

passport.serializeUser(function (user, done) {
    process.nextTick(function(){
        done(null, {id: user.id});
    });
});

passport.deserializeUser(async function (user, done) {
    const userModel = await User.findByPk(user.id, {
        include: [
            'role'
        ]
    });
    process.nextTick(function () {
        return done(null, userModel);
    });
});

module.exports.passport = passport;
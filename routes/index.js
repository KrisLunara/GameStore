var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const staffController = require('../controllers/staffController');
const gameController = require('../controllers/gameController');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'GameStore' });
});

router.get('/', function(req, res) {
  res.redirect('/');
});

//TODO finish adding all routers and the correct function

//product CRUD pages
router.get('/game/add', gameController.renderAddForm)
//router.post('game/add', gameController.addGameListing);

//login pages
router.get('/register', userController.renderRegistrationForm);
router.post('/register', userController.register);

router.get('/login', userController.renderLogin);
router.post('/login', userController.login);
router.get('/logout', userController.logout);

router.get('/staff-login', staffController.renderLogin);
router.post('/staff-login', staffController.login);
router.get('/staff-logout', staffController.logout);

module.exports = router;

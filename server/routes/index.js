var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', bundelName: 'home.bundle.js' });
});

router.get('/login', function (req, res, next) {
  res.render('index', { title: 'login', bundelName: 'login.bundle.js' });
});

router.post('/login', function (req, res, next) {
  res.redirect('/');
});

router.get('/register', function (req, res, next) {
  res.render('index', { title: 'register', bundelName: 'register.bundle.js' });
});

module.exports = router;

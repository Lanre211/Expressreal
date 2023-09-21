
var express = require('express');
var router = express.Router();

router.get('/some-route', function(req, res, next) {
 
});


router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Our Services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;





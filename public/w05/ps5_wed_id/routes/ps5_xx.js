var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ps5_xx', { title: 'PlayStation 5 -- 123456789' });
});

module.exports = router;

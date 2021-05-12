var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_53', { title: '陳彥伯408410453' });
});

module.exports = router;

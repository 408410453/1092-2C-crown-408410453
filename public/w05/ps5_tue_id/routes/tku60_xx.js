var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tku60_xx', { title: 'TKU60-- 123456789' });
});

module.exports = router;

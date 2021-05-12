var express = require('express');
var router = express.Router();
/* get the client*/


const categories = require('../data/categories');

//const db = require('../utils/database');
//const category_53 = require("../models/categoryModel");

const crown2Controller_53 = require('../controllers/crown2Controller_53');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_53', { 
    title: '陳彥伯408410453(static)',
    data: categories 
  });
});

router.get('/homepage',crown2Controller_53.getHomepage);

router.get('/shop_53/:product',crown2Controller_53.getProductsByCategory);

module.exports = router;

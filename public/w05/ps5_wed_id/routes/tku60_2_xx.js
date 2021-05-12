var express = require('express');
var router = express.Router();

const videos = [
  {
    title: '淡江大戲 1',
    url: 'https://www.youtube.com/embed/RechrtUxfQc'
  },
  {
    title: '淡江大戲2',
    url: 'https://www.youtube.com/embed/MRWX49Furew',
  },
  {
    title: '淡江大戲3',
    url: 'https://www.youtube.com/embed/METhdbL_iMw',
  },
  {
    title: '淡江大戲4',
    url: 'https://www.youtube.com/embed/ZyDbq-lEKTo',
  },
  {
    title: '淡江大戲5',
    url: 'https://www.youtube.com/embed/NlsrJbVvjaA',
  },
  {
    title: '淡江大戲2',
    url: 'https://www.youtube.com/embed/MRWX49Furew',
  },
  {
    title: '淡江大戲3',
    url: 'https://www.youtube.com/embed/METhdbL_iMw',
  },
  {
    title: '淡江大戲4',
    url: 'https://www.youtube.com/embed/ZyDbq-lEKTo',
  },
  {
    title: '淡江大戲5',
    url: 'https://www.youtube.com/embed/NlsrJbVvjaA',
  },

];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tku60_2_xx', { 
    title: 'TKU60_2_-- 123456789',
    data: videos
  });
});

module.exports = router;

const category_53 = require('../models/categoryModel');

const clothing_53 = require('../models/clothingModel');

exports.getHomepage = async(req,res) => {
    let data;
    const [rows] = await category_53.fetchAll();
    data = rows;
    //res.json(data);
    res.render('crown2_53', { 
    title: '陳彥伯408410453(async,await)',
    data
  });
}

exports.getProductsByCategory = async(req, res) => {
  console.log('req.params', req.params.product);
  let data = {};
  data.cid =0;
  if(req.params.product === 'hats') data.cid = 1;
  else if(req.params.product === 'jackets') data.cid = 2;
  else if(req.params.product === 'sneakers') data.cid = 3;
  else if(req.params.product === 'womens') data.cid = 4;
  else if(req.params.product === 'mens') data.cid = 5;

  const [rows] = await clothing_53.fetchProductByCategory(data.cid);
  data = rows;
  //res.json(data);
  res.render('clothing', { 
    title: req.params.product.toUpperCase() ,
    data
  });
    

  
}




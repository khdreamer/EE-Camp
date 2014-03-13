
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'frEEdom：2014 台大電機營' });
};
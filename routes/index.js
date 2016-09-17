var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/** 跳转到我的博客页面**/
router.get('/myBlog', function(req, res, next) {
  res.render('myblog', { name: 'Express' });
});
module.exports = router;

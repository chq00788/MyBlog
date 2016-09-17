/**
 * Created by CHQ on 2016/9/17.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.get('/toBlogList', function (req, res, next) {
    res.render('blogmanage.jade');
});
module.exports = router;
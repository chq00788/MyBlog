var express = require('express');
var router = express.Router();
var user = require('../conf/db').user;
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/** 登陆 **/
router.post('/login', function (req, res, next) {
    var query = {username: req.body.username, password: req.body.password};
    (function () {
        user.count(query, function (err, doc) {
            if (doc == 1) {
                console.log(query.username + ": login success in " + new Date());
                res.json({
                    code: 200,
                    msg: '登录成功',
                    username:query.username
                });
            } else {
                console.log(query.username + ": login failed in " + new Date());
                res.render('login', {message: '用户名或密码错误'});
            }
        });
    })(query);
});

/** 注册 **/
router.post('/register', function (req, res, next) {
    var u = new user({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    u.save(function (err, result) {
        if (err) {
            console.log(u.username + ": register failed in " + new Date())
            res.json({
                code: 1,
                msg: '注册失败'
            });
        } else {
            console.log(u.username + ": register success in " + new Date());
            res.json({
                code: 200,
                msg: '注册成功,请登录'
            });
        }
    });
});

module.exports = router;

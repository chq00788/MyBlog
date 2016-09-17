/**
 * Created by Administrator on 2016/9/10.
 */
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/myBlog');//；连接数据库

var Schema = mongoose.Schema;   //  创建模型

var userSchema = new Schema({
    username: String,
    password: String,
    email:String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联

exports.user = db.model('User', userSchema); //  与users集合关联
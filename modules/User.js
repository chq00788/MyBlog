/**
 * Created by CHQ on 2016/9/17.
 */
var userSchema = new Schema({
    username: String,
    password: String,
    email:String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联

exports.user = db.model('users', userSchema); //  与users集合关联
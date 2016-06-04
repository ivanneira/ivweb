var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    userName: String,
    userLastname: String
})

module.exports = mongoose.model('User', userSchema)

//exports = module.exports = function(app,mongoose){
//    var UserSchema = new mongoose.Schema({
//        userName: String,
//        userLastname: String
//    });
//
//    mongoose.model('User', UserSchema);
//};


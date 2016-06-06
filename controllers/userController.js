//module.exports = function(app){
//    var User = require('../models/userModel');
//
//    //GET
//
//    findAllUsers = function(req,res){
//        User.find(function(err, users){
//            if(!err) res.send(users);
//            else console.log('ERROR ' + err)
//        });
//    };
//
//    //GET ROUTE
//
//    app.get('/trylogin',findAllUsers);
//};

var mongoose = require('mongoose')
var User = mongoose.model('User')

exports.findAllUsers = function (req,res){
    User.find(function(err,users){
        if(err){ res.send(500,err.message); console.log('ERR')}
        else res.send(users)
    })
}
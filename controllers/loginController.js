module.exports = function(app){
    var User = require('../models/loginModel');

    //GET

    findAllUsers = function(req,res){
        User.find(function(err, users){
            if(!err) res.send(users);
            else console.log('ERROR ' + err)
        });
    };

    //GET ROUTE

    app.get('/allusers',findAllUsers);
};
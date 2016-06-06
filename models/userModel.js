//var mongoose = require('mongoose')
//var Schema = mongoose.Schema
//
//var loginSchema = new Schema({
//    loginNAme: String,
//    loginPassword: String
//})
//
//module.exports = mongoose.model('Login', loginSchema)


exports = module.exports = function (app,mongoose){

    var userSchema = new mongoose.Schema({
        access: String,
        entryDate: Date,
        exitDate: Date,
        serviceStatus: String,
        userName: String,
        userLastName: String,
        DNI: String,
        referenceCode: String,
        tel: String,
        address: [{
            street: String,
            city: String,
            comments: String
        }],
        ip: [{
            queueIP: String,
            sharedIP: String
        }],
        receptor: String,
        router: String,
        details: String,
        paycardCode: String
    })

    mongoose.model('User', userSchema)
}

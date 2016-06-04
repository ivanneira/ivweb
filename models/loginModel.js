var mongoose = require('mongoose')
var Schema = mongoose.Schema

var loginSchema = new Schema({
    loginNAme: String,
    loginPassword: String
})

module.exports = mongoose.model('Login', loginSchema)

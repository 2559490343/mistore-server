const mongoose = require('mongoose')

let userSchma = new mongoose.Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model('User', userSchma)
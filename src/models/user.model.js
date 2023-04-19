const mongoose = require('mongoose');

const userSchima = new mongoose.Schema({
    name: String,
    lastname: String,
    phone: String,
    password:String,
})

const User = mongoose.model('User', userSchima)

module.exports = User
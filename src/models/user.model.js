const mongoose = require('mongoose');

const userSchima = new mongoose.Schema({
    name: String,
    lastname: String,
    phone: String,
    password:String,
},
    {
        timestamps:true
    }
)

const User = mongoose.model('User', userSchima)

module.exports = User
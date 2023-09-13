const mongoose = require('mongoose');

const userSchima = new mongoose.Schema({
    username: String,
    phone: String,
    password:String,
},
    {
        timestamps:true
    }
)

const User = mongoose.model('User', userSchima)

module.exports = User
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    status: String,
    details: String
}, {
timestamps:true
})

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;
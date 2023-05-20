const Product = require('../models/product.model');

// create
exports.create = async (req, res) => {
    try {
        const product = (await Product.create({ ...req.body }));
        res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
//select all product
exports.selectAll = async (req, res) => {
    try {
        const product = await Product.find().exec();
        if (!product) {
            return res.status(404).json({message: 'Product not found'})
        }
        res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
//select a product
//update
//delete
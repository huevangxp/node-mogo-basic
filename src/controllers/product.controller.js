const Product = require('../models/product.model');

// create
exports.create = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
//select all product
exports.selectAll = async (req, res) => {
    try {
        const product = await Product.find().exec();
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }
        res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
//select a product
exports.selectById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
//update
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, status, details } = req.body;
        const product = await Product.findById(id);
        // console.log(product);
        if (!product) {
            return res.status(404).json({ message: "this product is not found" });
        }
       await Product.findOneAndUpdate({
            name,
            price,
            status,
            details
        })
        res.status(200).json({message: "Product updated successfully"})
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
//delete
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
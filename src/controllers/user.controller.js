const User = require('../models/user.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

exports.create = async (req, res) => {
    try {
        const { name, lastname, phone, password } = req.body;
        const user = await new User({ name, lastname, phone, password });
        await user.save();
        res.status(201).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.select = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.delete = async (req, res) => {
    const { id } = req.params
    try {
        await User.findOneAndDelete({ _id: id }).then(() => {
            res.status(200).json({ message: 'User deleted successfully' });
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.selectById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById({ _id: id })
        if (!user) {
            return res.status(404).json({ message: 'not found this id' })
        }
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.update = async (req, res) => {
    const { id } = req.params
    try {
        const { name, lastname, phone, password } = req.body
        const user = await User.findById({ _id: id })
        if (!user) {
            return res.status(404).json({ message: "id not found!" })
        }
         await User.findOneAndUpdate({
            name,
            lastname,
            phone,
            password,
        })
        res.status(200).json({ messages: "update this user successfully" })
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.register = async (req, res) => {
    try {
        const { username, phone, password } = req.body;

        const phoneCheck = await User.findOne({ phone: phone });

        if (phoneCheck) {
            return res.status(404).json({message: 'Phone number is already registered'})
        }

        const newPass = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            phone,
            password: newPass
        })
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.login = async (req, res) => {
    try {
        const { phone, password } = req.body;
        console.log(phone, password);
        const user = await User.findOne({ phone: phone })
        console.log('3');
        if (!user) {
            return res.status(404).json({ message: 'phone number not found' });
        }
        // console.log("object");
        const checkPass = await bcrypt.compare(password, user.password);
        if (!checkPass) {
            return res.status(404).json({message:'password incorrect'});
        }
        const users = {
            id: user._id,
            name: user.name,
            phone: user.phone,
        }
        const token = await jwt.sign(users, 'myPrivateKey', {expiresIn:"120d"})
        res.status(200).json(token)
    } catch (error) {
        return res.status(500).json(error)
    }
}
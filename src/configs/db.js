const mongoose = require('mongoose');

const ConnDB = async () => {
    try {
        await mongoose.connect(process.env.URL).then(() => {
            console.log('connect mongodb successfuly...');
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnDB;